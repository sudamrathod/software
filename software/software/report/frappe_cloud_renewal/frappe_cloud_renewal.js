// Copyright (c) 2024, sudam and contributors
// For license information, please see license.txt

frappe.query_reports["Frappe Cloud Renewal"] = {
	"filters": [
        {
         	"label": "Customer",
         	"fieldname": "customer",
         	"fieldtype": "Link",
         	"options":"Customer"
        },

		{
			"label": "From Date",
			"fieldname": "from_date",
			"fieldtype": "Date",
		},
		{
			"label": "To Date",
			"fieldname": "to_date",
			"fieldtype": "Date",
		},

		{
			"label": "Expiry Date",
			"fieldname": "expiry_date",
			"fieldtype": "Date",
		},

		{
			"label": "Status",
			"fieldname": "status",
			"fieldtype": "Select",
			options: ["","Active", "Expired"],

			
		},


	]
};
