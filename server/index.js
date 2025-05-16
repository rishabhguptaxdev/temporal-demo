const express = require("express");
const { Connection, Client } = require("@temporalio/client");

const app = express();
const port = 3000;

app.get("/start", async (req, res) => {
	const connection = await Connection.connect();
	const client = new Client({ connection });

	const handle = await client.workflow.start("dummyWorkflow", {
		taskQueue: "dummy-task-queue",
		workflowId: "workflow-" + Date.now(),
	});

	res.send(`Started workflow: ${handle.workflowId}`);
});

app.listen(port, () => {
	console.log(`Express server running at http://localhost:${port}`);
});
