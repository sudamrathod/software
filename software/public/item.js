// frappe.ui.form.on("Item", {
//     onload:function(frm){
//         console.log("ssssssssssssss")
        
//         frm.set_query("custom_material_description", function() {
//             return {
//                 filters: [
//                     ["Material Description","item_group","=", frm.doc.item_group]
//                 ]
//             };
//         });
//         frm.set_query("custom_material_category", function() {
//             return {
//                 filters: [
//                     ["Material Category","material_description", "=", frm.doc.custom_material_description]
//                 ]
//             };
//         });
        
//     }
// })
