const { proxyActivities } = require("@temporalio/workflow");

exports.dummyWorkflow = async function () {
	console.log("Dummy workflow started");
	return "Hello from dummy!";
};
