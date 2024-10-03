frappe.ui.form.on('Purchase Order Item', {
    item_code: function(frm) {
        // Get total number of items
        var total_items = frm.doc.items.length;

        // Calculate the new amount for each row
        var new_amount = frm.doc.total / total_items;

        // Loop through each row in the items table and set the new amount
        frm.doc.items.forEach(function(item) {
            // Get the row first using frappe.get_doc
            var row = frappe.get_doc(item.doctype, item.name);
            
            // Now set the amount and rate for the row
            frappe.model.set_value(row.doctype, row.name, 'qty', 1);
            frappe.model.set_value(row.doctype, row.name, 'amount', new_amount);
            frappe.model.set_value(row.doctype, row.name, 'price_list_rate', new_amount);
            frappe.model.set_value(row.doctype, row.name, 'rate', new_amount); // Assuming rate should be same as amount
        });

        // Refresh the field to show updated values in the form
        frm.refresh_field('items');
    },
    
    qty: function(frm, cdt, cdn) {
        var row = frappe.get_doc(cdt, cdn); // Get the current row

        // Calculate rate based on amount and quantity
        if (row.qty && row.amount) {  // Check if qty and amount are defined to avoid division by 0
            frappe.model.set_value(cdt, cdn, 'rate', row.amount / row.qty);
        } else {
            frappe.model.set_value(cdt, cdn, 'rate', 0); // Set rate to 0 if qty or amount are missing
        }

        frm.refresh_field('items'); // Refresh items field to reflect changes
    }
});
