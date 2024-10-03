import React from "react";
import ReactFlow, { ReactFlowProvider, Node, Edge } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
	{
		id: "1",
		position: { x: 250, y: 0 },
		data: { label: "Explore" },
		type: "default",
	},
];

const initialEdges: Edge[] = [];

const FlowChart: React.FC = () => {
	return (
		<div style={{ height: 500 }}>
			<ReactFlowProvider>
				<ReactFlow nodes={initialNodes} edges={initialEdges} />
			</ReactFlowProvider>
		</div>
	);
};

export default FlowChart;
