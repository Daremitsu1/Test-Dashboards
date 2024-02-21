import React from "react";
import ReactDOM from "react-dom";
import { RadarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
import "./plex-and-carbon-components.css";

class App extends React.Component {
	state = {
		data: [
			{
				"document": "Deed",
				"feature": "Performance",
				"score": 80
			},
            {
                "document": "Deed",
                "feature": "Document Count",
                "score": 90
            },
			{
				"document": "Deed",
				"feature": "Complexity",
				"score": 55
			},
            {
                "document": "Deed",
                "feature": "Engagement",
                "score": 60
            },
            {
                "document": "Deed",
                "feature": "Audit",
                "score": 15
            },
            {
				"document": "Foreclosure",
				"feature": "Performance",
				"score": 60
			},
            {
                "document": "Foreclosure",
                "feature": "Document Count",
                "score": 40
            },
			{
				"document": "Foreclosure",
				"feature": "Complexity",
				"score": 80
			},
            {
                "document": "Foreclosure",
                "feature": "Engagement",
                "score": 55
            },
            {
                "document": "Foreclosure",
                "feature": "Audit",
                "score": 70
            },
            {
				"document": "Mortgage",
				"feature": "Performance",
				"score": 75
			},
            {
                "document": "Mortgage",
                "feature": "Document Count",
                "score": 60
            },
            {
                "document": "Mortgage",
                "feature": "Complexity",
                "score": 65
            },
            {
                "document": "Mortgage",
                "feature": "Engagement",
                "score": 70
            },
            {
                "document": "Mortgage",
                "feature": "Audit",
                "score": 55
            },            
		],
		options: {
			"title": "User Performance by Document",
			"radar": {
				"axes": {
					"angle": "feature",
					"value": "score"
				}
			},
			"data": {
				"groupMapsTo": "document"
			},
			"height": "400px"
		}
	};

	render = () => (
		<RadarChart
			data={this.state.data}
			options={this.state.options}>
		</RadarChart>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));

  