<script type="text/javascript">
    
    function initial() {
        $('[name=input_2]').parent().hide();
        $('[name=input_3]').parent().hide();
        $('[name=input_4]').parent().hide();
        $('[name=input_5]').parent().hide();
        $('[name=input_6]').parent().hide();
        $('[name=input_7]').parent().hide();
        $('[name=button_28]').parent().hide();
        $('[name=button_88]').parent().hide();
        $('[name=button_33]').parent().hide();
    }


    function val() {
        
        d = document.getElementById("select_id").value;
        //alert(d);

        switch (d) {
           case '1':
            $('[name=button_1]').parent().show();
            $('[name=button_12]').parent().show();
            $('[name=input_1]').parent().show();
            $('[name=input_2]').parent().hide();
            $('[name=input_3]').parent().hide();
            $('[name=input_4]').parent().hide();
            $('[name=input_5]').parent().hide();
            $('[name=input_6]').parent().hide();
            $('[name=input_7]').parent().hide();
            $('[name=button_28]').parent().hide();
            $('[name=button_88]').parent().hide();
            $('[name=button_33]').parent().hide();
           break;
           case '2':
            $('[name=button_12]').parent().hide();
            $('[name=input_1]').parent().hide();
            $('[name=input_2]').parent().show();
            $('[name=input_3]').parent().hide();
            $('[name=input_4]').parent().hide();
            $('[name=input_5]').parent().hide();
            $('[name=input_6]').parent().hide();
            $('[name=input_7]').parent().hide();
            $('[name=button_28]').parent().show();
            $('[name=button_88]').parent().hide();
            $('[name=button_33]').parent().hide();
            $('[name=button_1]').parent().hide();
           break;  
           case '3':
            $('[name=button_12]').parent().hide();
            $('[name=input_1]').parent().hide();
            $('[name=input_2]').parent().hide();
            $('[name=input_3]').parent().show();
            $('[name=input_4]').parent().hide();
            $('[name=input_5]').parent().hide();
            $('[name=input_6]').parent().hide();
            $('[name=input_7]').parent().hide();
            $('[name=button_28]').parent().hide();
            $('[name=button_88]').parent().hide();
            $('[name=button_33]').parent().show();
            $('[name=button_1]').parent().hide();
           break;
           case '4':
            $('[name=button_12]').parent().hide();
            $('[name=input_1]').parent().hide();
            $('[name=input_2]').parent().hide();
            $('[name=input_3]').parent().hide();
            $('[name=input_4]').parent().show();
            $('[name=input_5]').parent().hide();
            $('[name=input_6]').parent().hide();
            $('[name=input_7]').parent().hide();
            $('[name=button_28]').parent().hide();
            $('[name=button_88]').parent().hide();
            $('[name=button_33]').parent().hide();
            $('[name=button_1]').parent().hide();
           break;
           case '5':
            $('[name=button_12]').parent().hide();
            $('[name=input_1]').parent().hide();
            $('[name=input_2]').parent().hide();
            $('[name=input_3]').parent().hide();
            $('[name=input_4]').parent().hide();
            $('[name=input_5]').parent().show();
            $('[name=input_6]').parent().hide();
            $('[name=input_7]').parent().hide();
            $('[name=button_28]').parent().hide();
            $('[name=button_88]').parent().hide();
            $('[name=button_33]').parent().hide();
            $('[name=button_1]').parent().hide();
           break;
           case '6':
            $('[name=button_12]').parent().hide();
            $('[name=input_1]').parent().hide();
            $('[name=input_2]').parent().hide();
            $('[name=input_3]').parent().hide();
            $('[name=input_4]').parent().hide();
            $('[name=input_5]').parent().hide();
            $('[name=input_6]').parent().show();
            $('[name=input_7]').parent().hide();
            $('[name=button_28]').parent().hide();
            $('[name=button_88]').parent().hide();
            $('[name=button_33]').parent().hide();
            $('[name=button_1]').parent().hide();
           break;
           case '7':
            $('[name=button_12]').parent().hide();
            $('[name=input_1]').parent().hide();
            $('[name=input_2]').parent().hide();
            $('[name=input_3]').parent().hide();
            $('[name=input_4]').parent().hide();
            $('[name=input_5]').parent().hide();
            $('[name=input_6]').parent().hide();
            $('[name=input_7]').parent().show();
            $('[name=button_28]').parent().hide();
            $('[name=button_88]').parent().hide();
            $('[name=button_33]').parent().hide();
            $('[name=button_1]').parent().hide();
           break;  
        
        }
    }

</script>