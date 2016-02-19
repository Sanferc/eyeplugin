$(document).ready(function(){

    $(".bob").mouseenter(function(){

        $(".bob").mousemove(function(e) {

            var x = (e.clientX/10);
            var y = (e.clientY/10);
 
            switch (true) {

                case x < 64:

                        if ( y < 22.4 ) {
                            $(".foto0").appendTo(".bob ul");
                        } else if ( y > 32.4 ) {
                            $(".foto4").appendTo(".bob ul");
                        } else if ( y > 22 ) {
                            if ( y < 32.4 ) {
                                $(".foto5").appendTo(".bob ul");
                            }    
                        }

                        break;

                case x > 74.4:

                        if ( y < 22.4 ) {

                            $(".foto0").appendTo(".bob ul");

                        } else if ( y > 32.4 ) {

                            $(".foto4").appendTo(".bob ul");

                        } else if ( y > 22 ) {

                            if ( y < 32.4 ) {

                                $(".foto5").appendTo(".bob ul");
                            }    
                        }
                        
                        break;

                case x > 64:

                        if ( x < 74.4 ) {

                            if ( y < 22) {

                                $(".foto1").appendTo(".bob ul");
                            }

                            if ( y > 32.4 ) {

                                $(".foto3").appendTo(".bob ul");
                            } 

                            if ( y > 22 ) {

                                if ( y < 32.4 ) {

                                    $(".foto2").appendTo(".bob ul");
                                }    
                            }
                    }
                        
                        break;
  
            }

        }); 

    });

});

