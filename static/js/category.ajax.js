$(document).ready(function(){const t=$("#Vland").attr("data-vehicle-land-url"),a=$(this).val();$.ajax({url:t,data:{"data-Vland":a},success:function(t){$("#Vland").html(t);let a='<option value="">---------</option>';t.forEach(function(t){a+=`<option value="${t.vehicle_land}">${t.vehicle_land}</option>`}),$("#Vland").html(a)}})}),$("#Vland").change(function(){const t=$("#Vtype").attr("data-vehicle-type-url"),a=$(this).val();$.ajax({url:t,data:{"Data-Vland":a},success:function(t){$("#Vtype").html(t);let a='<option value="">---------</option>';t.forEach(function(t){a+=`<option value="${t.vehicle_type}">${t.vehicle_type}</option>`}),console.log(a),$("#Vtype").html(a)}})}),$("#Vtype").change(function(){const t=$("#Category").attr("data-category-url"),a=$("#Vland").val(),o=$(this).val();$.ajax({url:t,data:{"Data-Vland":a,"Data-Vtype":o},success:function(t){$("#Category").html(t);let a='<option value="">---------</option>';t.forEach(function(t){a+=`<option value="${t.category}">${t.category}</option>`}),console.log(a),$("#Category").html(a)}})}),$("#Category").change(function(){const t=$("#Subcategory").attr("data-subcategory-url"),a=$("#Vtype").val(),o=$("#Vland").val(),n=$(this).val();$.ajax({url:t,data:{"Data-Vtype":a,"Data-Vland":o,"Data-Category":n},success:function(t){$("#Subcategory").html(t);let a='<option value="">---------</option>';t.forEach(function(t){a+=`<option value="${t.sub_category}">${t.sub_category}</option>`}),$("#Subcategory").html(a)}})});