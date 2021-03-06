/*!
 * ${copyright}
 */

// Provides the Design Time Metadata for the sap.ui.layout.VerticalLayout control
sap.ui.define([],
	function () {
		"use strict";

		return {
			actions: {
				remove: {
					changeType: "hideControl"
				},
				reveal: {
					changeType: "unhideControl"
				}
			},
			aggregations: {
				content: {
					domRef: ":sap-domref",
					actions: {
						move: "moveElements"
					}
				}
			},
			name: {
				singular: "VERTICAL_LAYOUT_CONTROL_NAME",
				plural: "VERTICAL_LAYOUT_NAME_PLURAL"
			}
		};

	}, /* bExport= */ false);