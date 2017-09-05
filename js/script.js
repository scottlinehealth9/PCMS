var regExp = "/^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/";
$('.textInput').attr('pattern', regExp);
$('#submit').click(function(e){
    e.preventDefault();
    var resultSubmit = $('.textInput').val();
    if(resultSubmit.length){
        $.ajax({
            type: 'POST',
            url: "/form.php",
            data: {link: resultSubmit},
            success: function(data){
                //resultSubmit = " ";
                $('#thank').css('visibility','visible');
				$('.textInput').val('');
            }
        })
    }

});

//$('#menu a').click(function(e){
//    var itemMenu = e.target.parentNode;
//    console.log(itemMenu.length())
//   $(document).scrollTop(1000);
//})
//$(window).scroll(function(){
//    if($('.layes-02').hasClass('active')==true){
//        console.log('1')
//    }
//});