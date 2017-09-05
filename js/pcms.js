function drawMarkerPlot(renderTo, marker_id, test_id, age, sex){
	
	var options = {
        chart: {
        	renderTo: renderTo,
            type: 'column'
        },
        title: {
            text: 'Marker Value'
        },
        xAxis: {
        	labels:
        	{
        	  enabled: false
        	}
        },
        yAxis:{
        	title: {
        		text: 'Value'
        	},
        	plotLines: [{
        		value: 0,
        		color: 'red',
        		width: 2,
        		zIndex:4,
        		label: {
        			text: 'low critical value'
        		}
        	},
        	{
        		value: 5,
        		color: 'red',
        		width: 2,
        		zIndex:4, 
        		label: {
        			text: 'high critical value'
        		}
        		
        	}]
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Patient data',
            data: [5],
            color: '#000000'
        }, {
            name: 'Populaton median',
            data: [2],
            color: '#058DC7'
        }]
    };
	
	$.getJSON('/plot/json/',
    		{
		     'marker_id': marker_id,
    	     'test_id': test_id,
    	     'age': age,
    	     'sex': sex
    		},
    		function(data) { 
    	options.title.text = data['data']['plot_title']	
    	options.series[0].data = [data['data']['patient_marker_val']]
    	options.series[0].color = data['data']['patient_color']
    	options.series[1].data = [data['data']['marker_ref_high']];
    	
    	options.yAxis.plotLines[0].value = data['data']['marker_crit_low']
    	options.yAxis.plotLines[1].value = data['data']['marker_crit_high']
    	options.yAxis.max = data['data']['marker_crit_high']
    	
        var chart = new Highcharts.Chart(options);
    });
}

(function ($) {
    $.fn.restrict = function () {
        // returns the collection returned by the selector, over which we iterate:
        return this.each(function(){
            // binding a change event-handler:
        	if ($(this).attr("name")!='height' && $(this).attr("name")!='weight' ){
            $(this).on('change', function(){
                // caching the 'this' (the current 'input'):
                var _self = this,
                    // creating numbers from the entered-value,
                    // the min and the max:
                    v = parseFloat(_self.value),
                    min = parseFloat(_self.min),
                    max = parseFloat(_self.max);
                // if it's in the range we leave the value alone (or set
                // it back to the entered value):
                if (v >= min && v <= max){
                    _self.value = v;
                }
                else {
                    // otherwise we test to see if it's less than the min,
                    // if it is we reset the value to the min, otherwise we reset
                    // to the max:
                    _self.value = v < min ? min : max;
                }
            });
          }// end of if not weight height smoke
        });
    };
})(jQuery);

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function fillForm(btn, filename){
	
	   $(btn).val("Loading data...").attr( "disabled", true );	
	    
	   metric = getParameterByName('m');
	   
	   if(!metric){metric='eu'}
	   
	   
	   
		$.get('/patient/json/',
				{
			     'file_name': filename,
			     'metric': metric
			     },
				function(data){
					
					$('#tbl-form').find("input[type=number]").val(""); // clear form
					
					$.each(data[0], function( index, value ) { //populate with values from the file
						index++;
						$('#tbl-form tr:nth-child('+index+') td:nth-child(2) input').val(value);  
						});
					$(".hiddenAdditional").show(); // show hidden markers
					$("#pathmodal").modal("hide"); // hide modal
				});
	}

$(function () {
	
	// load prepared data For 41 Marker!
	
	$("input.btn-prepared").click(function(){
		$("#myModalLabel").text('Choose patient');
		
		var prepared_data = [
		                     {
		                    	 'filename': '30_male.csv',
		                    	 'name': 'Patient 1',
		                    	 'real_age': 30,
		                    	 'real_gender': 'Male'
		                     },
		                     {
		                    	 'filename': '45_female.csv',
		                    	 'name': 'Patient 2',
		                    	 'real_age': 45,
		                    	 'real_gender': 'Female'
		                     },
		                     {
		                    	 'filename': '63_female.csv',
		                    	 'name': 'Patient 3',
		                    	 'real_age': 63,
		                    	 'real_gender': 'Female'
		                     },
		                     {
		                    	 'filename': '33_male.csv',
		                    	 'name': 'Patient 4',
		                    	 'real_age': 33,
		                    	 'real_gender': 'Male'
		                     },
		                     {
		                    	 'filename': '30_female.csv',
		                    	 'name': 'Patient 5',
		                    	 'real_age': 30,
		                    	 'real_gender': 'Female'
		                     },
		                     {
		                    	 'filename': '35_female.csv',
		                    	 'name': 'Patient 6',
		                    	 'real_age': 35,
		                    	 'real_gender': 'Female'
		                     },
		                     {
		                    	 'filename': '77_female.csv',
		                    	 'name': 'Patient 7',
		                    	 'real_age': 77,
		                    	 'real_gender': 'Female'
		                     },
		                     {
		                    	 'filename': '28_male.csv',
		                    	 'name': 'Patient 8',
		                    	 'real_age': 28,
		                    	 'real_gender': 'Male'
		                     },
		                     {
		                    	 'filename': '46_male.csv',
		                    	 'name': 'Patient 9',
		                    	 'real_age': 46,
		                    	 'real_gender': 'Male'
		                     },
		                     ];
		var html = '<table class="table table-bordered">';
		html+= '<tr><th>Name</th><th>Real Age</th><th>Real Gender</th><th></th></tr>';
		for(var i in prepared_data){
			html+='<tr>';
			html+='<td>'+prepared_data[i].name+'</td>';
			html+='<td>'+prepared_data[i].real_age+'</td>';
			html+='<td>'+prepared_data[i].real_gender+'</td>';
			html+='<td><input type="button" class="btn btn-primary btn-patient" value="Fill Form" onclick="fillForm(this, \''+prepared_data[i].filename+'\')"></td>';
			html+='</tr>';
		}
		html+= '</table>';
		
		 
		
		$("#modalBody").html(html);
		$("#pathmodal").modal("show");
	});
	
// load prepared data For 33 Marker!
	
	$("input.btn-prepared33").click(function(){
		$("#myModalLabel").text('Choose patient');
		
		var prepared_data = [
		                     {
		                    	 'filename': '33_female_28.csv',
		                    	 'name': 'Patient 1',
		                    	 'real_age': 28,
		                    	 'real_gender': 'Female'
		                     },
		                     /*{
		                    	 'filename': '33_female_32.csv',
		                    	 'name': 'Patient 2',
		                    	 'real_age': 32,
		                    	 'real_gender': 'Female'
		                     },*/
		                     {
		                    	 'filename': '33_female_40.csv',
		                    	 'name': 'Patient 2',
		                    	 'real_age': 40,
		                    	 'real_gender': 'Female'
		                     },
		                     /*
		                     {
		                    	 'filename': '33_male_33.csv',
		                    	 'name': 'Patient 4',
		                    	 'real_age': 33,
		                    	 'real_gender': 'Male'
		                     },
		                     */
		                     {
		                    	 'filename': '33_male_43.csv',
		                    	 'name': 'Patient 3',
		                    	 'real_age': 43,
		                    	 'real_gender': 'Male'
		                     },
		                     {
		                    	 'filename': '33_male_69.csv',
		                    	 'name': 'Patient 4',
		                    	 'real_age': 69,
		                    	 'real_gender': 'Female'
		                     },
		                     
		                     ];
		var html = '<table class="table table-bordered" style="width:100%">';
		html+= '<tr><th>Name</th><th>Real Age</th><th>Real Gender</th><th></th></tr>';
		for(var i in prepared_data){
			html+='<tr>';
			html+='<td>'+prepared_data[i].name+'</td>';
			html+='<td>'+prepared_data[i].real_age+'</td>';
			html+='<td>'+prepared_data[i].real_gender+'</td>';
			html+='<td><input type="button" class="btn btn-primary btn-patient" value="Fill Form" onclick="fillForm(this, \''+prepared_data[i].filename+'\')"></td>';
			html+='</tr>';
		}
		html+= '</table>';
		
		 
		
		$("#modalBody").html(html);
		$("#pathmodal").modal("show");
	});	
	
//// Load examples for 19 markers
	
	$("input.btn-prepared19").click(function(){
		$("#myModalLabel").text('Choose patient');
		
		var prepared_data = [
		                     {
		                    	 'filename': '19_female_43.csv',
		                    	 'name': 'Patient 1',
		                    	 'real_age': 43,
		                    	 'real_gender': 'Female'
		                     },
		                     {
		                    	 'filename': '19_female_61.csv',
		                    	 'name': 'Patient 2',
		                    	 'real_age': 61,
		                    	 'real_gender': 'Female'
		                     },
		                     {
		                    	 'filename': '19_male_29.csv',
		                    	 'name': 'Patient 3',
		                    	 'real_age': 29,
		                    	 'real_gender': 'Male'
		                     },
		                     
		                     {
		                    	 'filename': '19_male_40.csv',
		                    	 'name': 'Patient 4',
		                    	 'real_age': 40,
		                    	 'real_gender': 'Male'
		                     },
		                     
		                     {
		                    	 'filename': '19_male_59.csv',
		                    	 'name': 'Patient 5',
		                    	 'real_age': 59,
		                    	 'real_gender': 'Male'
		                     },
		                     
		                     
		                     ];
		var html = '<table class="table table-bordered" style="width:100%">';
		html+= '<tr><th>Name</th><th>Real Age</th><th>Real Gender</th><th></th></tr>';
		for(var i in prepared_data){
			html+='<tr>';
			html+='<td>'+prepared_data[i].name+'</td>';
			html+='<td>'+prepared_data[i].real_age+'</td>';
			html+='<td>'+prepared_data[i].real_gender+'</td>';
			html+='<td><input type="button" class="btn btn-primary btn-patient" value="Fill Form" onclick="fillForm(this, \''+prepared_data[i].filename+'\')"></td>';
			html+='</tr>';
		}
		html+= '</table>';
		
		 
		
		$("#modalBody").html(html);
		$("#pathmodal").modal("show");
	});
	
	//$(".additional").parent().parent().addClass('hiddenAdditional').hide();
	
	$("#showBtn").click(function(){
		btnText = $(this).text();
		
		if (btnText.indexOf("Show")!=-1) $(this).text('Hide Additional Markers')
		else $(this).html('Show Additional Markers <br/>(improves accuracy by ~10%)')
		$(".hiddenAdditional").toggle("slow");
	});
	
	
	
	$("#nnBloodForm  input ").each(function(){$(this).restrict()});
	
	 $("#submitBtn").click(function(){
		 
		 non_blank = $(':input[value!=""]');
		 
		 var blank = 0;
		 $(":input.form-control").each(function(i, val) {
		   if ($(this).val() != '') {
			   blank++;
		   }
		 });

		 
		 if(blank>6){
		     $("#myModalLabel").text('Predicting age...');
		     $("#modalBody").html("<img src='/static/images/deep-network.jpg' style='width:100%'/>");
		     $(".modal-footer").html('');
             $("#pathmodal").modal("show");
		 }
		 else{
			 $("#myModalLabel").text('Not enough data...');
		     $("#modalBody").html("<h3>You should fill in at least 7 values to start prediction </h3>" );
		     $(".modal-footer").html("<button type='button' class='btn btn-success btn-lg' data-dismiss='modal'>Close</button>")
		     
		     $("#pathmodal").modal("show");
			 return false;
		 }
    });
	 
	// update real age
	 
	$("#btn_real_age").click(function(){
		var test_id = $("#test_id").val()
		var real_age = parseInt($("#inp_real_age").val()) || 0;
		
		var male = $("#sex1").prop("checked");
		var female = $("#sex0").prop("checked");
		
		var sex = 'Undefined';
		if(male) sex='Male';
		if(female) sex='Female';
		
		$.get( "/runnedtest/update/"+test_id,
			{'real_age': real_age,
			'sex': sex},
			function( data ) {
			 
				$("#wrap_real_age").fadeOut("slow", function(){
					$("#div_real_age").append('<br/><p class="thanks">Thanks! This will realy help!</p>')
				});
				drawPlots(); // update plots
			});
	});
	
	
	$("#emailSubmit").click(function(){
		
		var test_id = $("#test_id").val();
		var email = $("#email").val();
		var name = $("#name").val();
		
		$.get( "/runnedtest/update/"+test_id,
				{'email': email,
                 'name': name
				},
				function( data ) {
					
					$("#formeEmail").fadeOut("slow", function(){
						$("#div_email").append('<br/><p class="thanks">Thanks!</p>')
					});
				});
		
	});
	   
	
	
	
	
});