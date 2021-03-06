const Intent = require('../../lib/intent')
const contexts = require('../../../functions/src/config/context-keys')
const actions = require('../../../functions/src/config/action-keys')
const suspects = require('../../../functions/src/config/suspects')
const general = require('./general')
const suspectIntents = {
	[suspects.BRANDI]: require('./brandi'),
	[suspects.PETE]: require('./pete'),
	[suspects.CONSTANCE]: require('./constance'),
	[suspects.TUCKER]: require('./tucker'),
}

// map the keys and strings to publishable intent objects
var output = Object.keys(general).map((k) => {
	let oc = general[k].outputContexts.map((o) => {
		return new Intent.Context(o)
	})
	
	let par = general[k].parameters.map((p) => {
		return new Intent.Parameter(p.name, p.opts)
	})
	return new Intent(k)
		.contexts(general[k].contexts)
		.userPhrases(general[k].userPhrases)
		.outputContexts(oc)
		.parameters(par)
		.action(actions.QUESTION_SUSPECT)
		.build()
})

// create intents for suspect interrogation
Object.keys(suspectIntents).map(suspectContextKey => {
	var suspect = suspectIntents[suspectContextKey]
	return Object.keys(suspect).map((k) => {
		let ctx = contexts.suspects[suspectContextKey]
		let oc = suspect[k].outputContexts.map((o) => {
			return new Intent.Context(o)
		})
		let parameters = suspect[k].parameters.map((p) => {
			return new Intent.Parameter(p.name, p.opts)
		})
		let intent = new Intent(k)
			.userPhrases(suspect[k].userPhrases)
			.parameters(parameters)
			.contexts(
				suspect[k].contexts.concat([ctx])
			)
			.outputContexts(
				oc.concat([new Intent.Context(ctx, 1)])
			)
			.action(actions.QUESTION_SUSPECT)
			.build()
		output.push(intent)
		return intent
	})
})

module.exports = output
