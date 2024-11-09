# Copyright (c) 2024, sudam and contributors
# For license information, please see license.txt

import frappe
from frappe import _

def execute(filters=None):
	columns = get_columes()
	data = get_data(filters)
	return columns, data

def get_data(filters=None):
	if not filters:
		data = frappe.db.sql('''
			SELECT 
			name, 
			customer, 
			status, 
			start_date, 
			expiry_date, 
			customer_email,
			project_manager_email,
			account_manager_email,
			item,
			qty,
			rate
			FROM `tabFrappe Cloud Renewal`

			''', as_dict=True)

		return data

	if filters and filters.get('from_date') and filters.get('to_date') and filters.get('customer'):
		data = frappe.db.sql('''
			SELECT 
			name, 
			customer, 
			status, 
			start_date, 
			expiry_date, 
			customer_email,
			project_manager_email,
			account_manager_email,
			item,
			qty,
			rate
			FROM `tabFrappe Cloud Renewal`
			WHERE start_date BETWEEN %(from_date)s AND %(to_date)s
			AND customer = %(customer)s
			AND status = %(status)s
			''', filters, as_dict=True)

		return data

def get_columes():
	columns =[
		{
			"label": _("ID"),
			"fieldname": "name",
			"fieldtype": "Data",
			"width": 150,
		},
		{
			"label": _("Customer"),
			"fieldname": "customer",
			"fieldtype": "Link",
			"options":"customer",
			"width": 150,
		},
		{
			"label": _("Status"),
			"fieldname": "status",
			"fieldtype": "Select",
			"options":"status",
			"width": 100,
		},
		{
			"label": _("Start Date"),
			"fieldname": "start_date",
			"fieldtype": "Date",
			"width": 100,
		},
		{
			"label": _("Expiry Date"),
			"fieldname": "expiry_date",
			"fieldtype": "date",
			"width": 100,
		},
		{
			"label": _("Customer Email"),
			"fieldname": "customer_email",
			"fieldtype": "Data",
			"width": 100,
		},

		{
			"label": _("Project Manager Email"),
			"fieldname": "project_manager_email",
			"fieldtype": "Data",
			"width": 150,
		},
		{
			"label": _("Account Manager Email"),
			"fieldname": "account_manager_email",
			"fieldtype": "Data",
			"width": 100,
		},
		{
			"label": _("Item"),
			"fieldname": "item",
			"fieldtype": "link",
			"width": 100,
		},
		{
			"label": _("Qty"),
			"fieldname": "qty",
			"fieldtype": "Float",
			"width": 100,
		},
		{
			"label": _("Rate"),
			"fieldname": "rate",
			"fieldtype": "Float",
			"width": 100,
		},


	]
	return columns