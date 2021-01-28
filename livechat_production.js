setTimeout(function()
{
    (function ( $ ) {
        var templateOptions = null;

        $.fn.cmLivechat = function( options ) {

            var settings = $.extend({

                template: 'v42SQ23zz3r3zWC',
                siteUrl: 'https://cm.voipshop.lt',
                socketUrl: 'https://cm.voipshop.lt',
                v4FontAwesome: true,
                v4OlderFontAwesome: false
            }, options );

            $.getJSON( settings.siteUrl+'/livechat/template/'+settings.template, function( data ) {
                settingsOptions = settings;
                // Draw background
                window.cmLivechat_appid = settings.template;
                window.cmLivechat_socketUrl = settings.socketUrl;
                window.cmLivechat_siteUrl = settings.siteUrl;
                window.cmLivechat_soundWorks = true;
                templateOptions = data;
                console.log(templateOptions);
                var span = document.createElement('span');

                span.className = 'fa';
                span.style.display = 'none';
                document.body.insertBefore(span, document.body.firstChild);

                if ((css(span, 'font-family')) !== 'FontAwesome') {
                    $('head').append("<link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css' rel='stylesheet'>");
                    $('head').append("<script src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/all.min.js'></script>");


                }

                if(typeof io == 'undefined')
                    $('head').append("<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js'></script>")
                if(typeof jQuery == 'undefined')
                    $('head').append("<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>");

                document.body.removeChild(span);
                setTimeout(function()
                {

                    if(checkCookie('cmLivechat_chatID'))
                    {

                        renderChatWindow();
                        $('head').append('<style>.cmLivechat_required::after { content:" *";color: '+templateOptions.livechat.errorColor+';} #cmLivechat_icDropper>p{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropper>span{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropper>i{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropper>input{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropperNWH>p{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropperNWH>span{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropperNWH>i{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropperNWH>input{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_header>p{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_header>span{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_header>i{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_header>input{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_footer>p{font-size:.7em;font-family:Arial,Helvetica,sans-serif;margin-bottom:1em}#cmLivechat_footer>span{font-size:.7em;font-family:Arial,Helvetica,sans-serif;margin-bottom:1em}#cmLivechat_footer>i{font-size:.7em;font-family:Arial,Helvetica,sans-serif;margin-bottom:1em}#cmLivechat_footer>input{font-size:.7em;font-family:Arial,Helvetica,sans-serif;margin-bottom:1em}</style>');
                    }
                    else
                    {
                        $('head').append('<style>.cmLivechat_required::after { content:" *";color: '+templateOptions.livechat.errorColor+';} #cmLivechat_icDropper>p{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropper>span{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropper>i{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropper>input{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropperNWH>p{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropperNWH>span{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropperNWH>i{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_icDropperNWH>input{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_header>p{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_header>span{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_header>i{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_header>input{font-size:.7em;line-height:1.5;font-family:Arial,Helvetica,sans-serif}#cmLivechat_footer>p{font-size:.7em;font-family:Arial,Helvetica,sans-serif;margin-bottom:1em}#cmLivechat_footer>span{font-size:.7em;font-family:Arial,Helvetica,sans-serif;margin-bottom:1em}#cmLivechat_footer>i{font-size:.7em;font-family:Arial,Helvetica,sans-serif;margin-bottom:1em}#cmLivechat_footer>input{font-size:.7em;font-family:Arial,Helvetica,sans-serif;margin-bottom:1em}</style>');
                        renderWindow();

                    }
                    renderPopupButton();
                    $(window).resize();
                },2000);


            });
            return this;
        };
        function setCookie(cname,cvalue) {
            var d = new Date();
            d.setTime(d.getTime() + (12*60*60*1000));
            var expires = "";//"expires=" + d.toGMTString();
            document.cookie = cname + "=" + cvalue + ";" + expires + "path=/";//";path=/";
        }

        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function checkCookie(name) {
            var data=getCookie(name);
            if (data != "") {
                return true;
            } else {
                return false;
            }
        }
        $(window).on('resize', function(){
            var win = $(this); //this = window

            if (win.width() < 649) {

                $('#cmLivechat_container').css('width','100%');
                $('#cmLivechat_container').css('height','100%');
                $('#cmLivechat_container').css('top','0');
                $('#cmLivechat_container').css('bottom','auto');
                $('#cmLivechat_container').css('right','auto');

                $('#cmLivechat_header').css('width','100%');

                $('#cmLivechat_icDropper').css('width','auto');
                $('#cmLivechat_icDropper').css('height','58%');
                $('#cmLivechat_icDropperNWH').css('width','auto');
                $('#cmLivechat_icDropperNWH').css('height','58%');

                $('#cmLivechat_chat').css('width','auto');
                $('#cmLivechat_chat').css('height','50%');

                $('#cmLivechat_chatMessage').css('width','97% !important');
                //$('#cmLivechat_chatMessage').css('height','20px');

                $('#cmLivechat_sendChatMessage').css('width','auto');
                $('#cmLivechat_sendChatMessage').css('height','34px');
                $('#cmLivechat_sendChatMessage').css('right','10px');

                $('#cmLivechat_footer').css('width','auto');
                $('#cmLivechat_footer').css('height','45px');
                $('#cmLivechat_footer').css('padding','10px');

                $('#cmLivechat_container').css('z-index','9999');
                $('#cmLivechat_popupButton').css('z-index','100000');
                $('#cmLivechat_igDropper').css('width','auto');

                $('#cmLivechat_windowClose > i').addClass('fa-2x');
                $('#cmLivechat_windowMinimize > i').addClass('fa-2x');
                $('#cmLivechat_soundOn > i').addClass('fa-2x');
                $('#cmLivechat_soundOff > i').addClass('fa-2x');


            }

            if (win.width() > 650) {

                $('#cmLivechat_container').css('width','300px');
                $('#cmLivechat_container').css('height','400px');
                $('#cmLivechat_container').css('top','auto');
                $('#cmLivechat_container').css('bottom','27%');
                $('#cmLivechat_container').css('right','7%');

                $('#cmLivechat_header').css('width','300px');

                $('#cmLivechat_icDropper').css('width','300px');
                $('#cmLivechat_icDropper').css('height','405px');
                $('#cmLivechat_icDropper').css('width','300px');
                $('#cmLivechat_icDropper').css('height','405px');

                $('#cmLivechat_chat').css('width','300px');
                $('#cmLivechat_chat').css('height','280px');

                $('#cmLivechat_chatMessage').css('width','97% !important');
                //$('#cmLivechat_chatMessage').css('height','20px');

                $('#cmLivechat_sendChatMessage').css('width','auto');
                $('#cmLivechat_sendChatMessage').css('height','auto');

                $('#cmLivechat_footer').css('width','300px');
                $('#cmLivechat_footer').css('height','30px');
                $('#cmLivechat_footer').css('padding','0px');

                $('#cmLivechat_container').css('z-index','10000');
                $('#cmLivechat_popupButton').css('z-index','10000');
                $('#cmLivechat_igDropper').css('width','300px');

                $('#cmLivechat_windowClose > i').removeClass('fa-2x');
                $('#cmLivechat_windowMinimize > i').removeClass('fa-2x');
                $('#cmLivechat_soundOn > i').removeClass('fa-2x');
                $('#cmLivechat_soundOff > i').removeClass('fa-2x');



            }
        });

        function renderChatWindow()
        {


            var cssBtn = 'display: inline-block;margin-bottom: 0;margin-top:0;margin-left:0.3em;margin-right:0.3em;font-weight: 400;text-align: center;vertical-align: middle;touch-action: manipulation;cursor: pointer;background-image: none;border: 1px solid transparent;white-space: nowrap;padding: 6px 12px;font-size: 0.8em;line-height: 1.42857143;border-radius: 4px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;height:34px;text-transform:none;text-decoration:none;box-sizing: border-box;font-family: Arial, Helvetica, sans-serif;';
            var cssFormControl = 'display: block; width: 90%;height: 20px; padding: 6px 12px;font-size: 0.8em;line-height: 1.42857143;background-color: #fff;background-image: none;border: 1px solid #ccc; border-radius: 4px;-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075); box-shadow: inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;-o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;min-height:34px;text-transform:none;text-decoration:none;box-sizing: border-box;font-family: Arial, Helvetica, sans-serif;';
            $('body').append("<div id='cmLivechat_container' style='width:300px;height:400px;position:fixed;bottom:27%;right:7%;display:none;box-sizing:initial;font-size:initial;border-radius:200px;z-index:10000;'></div>");
            $('#cmLivechat_container').append("<div id='cmLivechat_header' style='background-color: " + templateOptions.livechat.bgColor + ";width:300px;height:50px;border-top-left-radius:10px;border-top-right-radius:10px;'></div>");

            if(templateOptions.logo != null)
            {
                $('#cmLivechat_header').append("<img style='max-width:229px;height:40px;margin:5px;float:left;' src='data: "+JSON.parse(templateOptions.livechat.logo).contentType+";base64,"+templateOptions.logo+"'>");

            }
            $('#cmLivechat_header').append("<span  id='cmLivechat_windowClose'><i class='"+(settingsOptions.v4FontAwesome ? "fa " : "fas ")+(settingsOptions.v4OlderFontAwesome?"fa-times":"fa-window-close")+"' style='float:right;color:"+templateOptions.livechat.mfcColor+";padding:5px;' ></i></span>");
            $('#cmLivechat_header').append("<span id='cmLivechat_windowMinimize'><i class='"+(settingsOptions.v4FontAwesome ? "fa " : "fas ")+"fa-minus-square' style='float:right;color:"+templateOptions.livechat.mfcColor+";padding:5px;' ></i></span>");
            $('#cmLivechat_header').append("<span id='cmLivechat_soundOn'><i class='"+(settingsOptions.v4FontAwesome ? "fa " : "fas ")+" fa-bell' style='float:right;color:"+templateOptions.livechat.mfcColor+";padding:5px;' ></i></span>");
            $('#cmLivechat_header').append("<span id='cmLivechat_soundOff' style='display:none;'><i class='"+(settingsOptions.v4FontAwesome ? "fa " : "fas ")+" fa-bell-slash' style='float:right;color:"+templateOptions.livechat.mfcColor+";padding:5px;' ></i></span>");

            $('#cmLivechat_container').append("<div id='cmLivechat_icDropper' style='background-color: " + templateOptions.livechat.fgColor + ";width:300px;height:405px;overflow:auto;overflow-x:hidden;padding-left:5px;padding-right:5px;position:relative;'></div>");
            $('#cmLivechat_container').append("<div id='cmLivechat_footer' style='background-color: " + templateOptions.livechat.fgColor + ";width:300px;height:30px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;'></div>");
            $('#cmLivechat_footer').append("<small style='color:"+templateOptions.livechat.tdfcColor+";float:right;font-size: 0.6em;padding:3px;'>powered by C-Monitor</small>");

            window.cmLivechat_icData =  [];
            var initialData = JSON.parse(templateOptions.livechat.icData);
            var groups = templateOptions.groups;
            window.cmLivechat_groups = groups;
            var htmlToAdd = "";



            $('#cmLivechat_windowMinimize').click(function()
            {
                $('#cmLivechat_iconClosed').css('display','none');
                $('#cmLivechat_iconOpen').css('display','initial');
                $('#cmLivechat_container').css('display','none');
                window.cmLivechatIsOpen = false;
            });

            $('#cmLivechat_windowClose').click(function()
            {
                window.cmLivechatIsOpen = false;

                $('#cmLivechat_iconClosed').css('display','none');
                $('#cmLivechat_iconOpen').css('display','initial');
                $('#cmLivechat_container').css('display','none');
            });
            $('#cmLivechat_soundOn').click(function()
            {
                window.cmLivechat_soundWorks = false;
                $('#cmLivechat_soundOn').css('display','none');
                $('#cmLivechat_soundOff').css('display','initial');
            });

            $('#cmLivechat_soundOff').click(function()
            {
                window.cmLivechat_soundWorks = true;
                $('#cmLivechat_soundOn').css('display','initial');
                $('#cmLivechat_soundOff').css('display','none');
            });

            $('#cmLivechat_icDropper').empty();
            $('#cmLivechat_icDropper').append('<textarea rows="5" id="cmLivechat_chatMessage" type="text" style="'+cssFormControl+' margin-top:5px;margin-bottom:5px;color:' + templateOptions.livechat.fcColor + ';width:97% !important;position:absolute;bottom:22px;resize: none;margin-left:0px;height:90px;z-index:30000;" ></textarea>');
            $('#cmLivechat_icDropper').append('<button id="cmLivechat_sendChatMessage" type="button" style="'+cssBtn+' margin-top:5px;margin-bottom:5px;color:' + templateOptions.livechat.fcColor + ';width:auto;height:34px;position:absolute;background-color:transparent;padding:0;margin:0;bottom:0px;font-size:23px;right:0px;text-transform:none;"><i class="'+(settingsOptions.v4FontAwesome ? "fa fa-paper-plane" : "fab fa-telegram-plane")+'"></i></button>');

            $('#cmLivechat_icDropper').append("<div id='cmLivechat_chat' style='background-color: " + templateOptions.livechat.fgColor + ";width:300px;height:280px;overflow:auto;padding-left:5px;padding-right:5px;position:relative;overflow-wrap:break-word'></div>");

            $.getJSON(window.cmLivechat_siteUrl+'/livechat/chathistory/'+getCookie('cmLivechat_chatID'), function( data ) {
                console.log(data);
                var messages = data.messages;
                for(var z = 0;z < messages.length;z++)
                {
                    var formattedDate = '<span style="font-size:0.6em;">'+messages[z].name+' '+(new Date(messages[z].date).getHours() < 10 ? '0'+new Date(messages[z].date).getHours() : new Date(messages[z].date).getHours())+":"+(new Date(messages[z].date).getMinutes() < 10 ? '0'+new Date(messages[z].date).getMinutes() : new Date(messages[z].date).getMinutes())+"</span><br>";
                    if(messages[z].type == 'INCOMING' && messages[z].text != undefined)
                    {
                        $('#cmLivechat_chat').append('<span style="color:'+templateOptions.livechat.csfcColor+';background-color: '+templateOptions.livechat.csbgColor+';font-size: 0.8em;padding:5px;margin:5px;border-radius:5px;display:inline-block;float:right;position:relative;margin-left:30px; word-break:break-word;">'+formattedDate+messages[z].text+'</span><br style="clear:both;">');

                    }
                    else
                    {
                        if(messages[z].text != undefined)
                            $('#cmLivechat_chat').append('<span style="color:'+templateOptions.livechat.crfcColor+';background-color:'+templateOptions.livechat.crbgColor+';font-size: 0.8em;padding:5px;margin:5px;border-radius:5px;display:inline-block;float:left;position:relative;margin-right:30px; word-break: break-word;">'+formattedDate+messages[z].text+'</span><br style="clear:both;">');
                    }
                }
                window.cmLivechat_socket = io(window.cmLivechat_socketUrl);
                window.cmLivechat_socket.emit('cmLivechat_Online',{chatID: getCookie('cmLivechat_chatID')});
                window.cmLivechat_socket.on('cmLivechat_message', function(data){
                    console.log(data);
                    var formattedDate = '<span style="font-size:0.6em;">'+data.name+' '+(new Date(data.date).getHours() < 10 ? '0'+new Date(data.date).getHours() : new Date(data.date).getHours())+":"+(new Date(data.date).getMinutes() < 10 ? '0'+new Date(data.date).getMinutes() : new Date(data.date).getMinutes())+"</span><br>";
                    $('#cmLivechat_chat').append('<span style="color:'+templateOptions.livechat.crfcColor+';background-color:'+templateOptions.livechat.crbgColor+';font-size: 0.8em;padding:5px;margin:5px;border-radius:5px;display:inline-block;float:left;position:relative;margin-right:30px; word-break: break-word;">'+formattedDate+data.text+'</span><br style="clear:both;">');
                    var elem = document.getElementById('cmLivechat_chat');
                    elem.scrollTop = elem.scrollHeight;
                    window.cmLivechatIsOpen = true;
                    if(window.cmLivechatIsOpen)
                    {
                        $('#cmLivechat_iconClosed').css('display','initial');
                        $('#cmLivechat_iconOpen').css('display','none');
                        $('#cmLivechat_container').css('display','initial');
                    }
                    if(window.cmLivechat_soundWorks)
                        playAudio();
                });
                var input = document.getElementById("cmLivechat_chatMessage");

// Execute a function when the user releases a key on the keyboard
                input.addEventListener("keyup", function(event) {
                    // Number 13 is the "Enter" key on the keyboard
                    if (event.key === "Enter") {
                        if(event.shiftKey)
                        {
                            //$('#cmLivechat_chatMessage').val($('#cmLivechat_chatMessage').val()+"\n");
                        }
                        else
                        {
                            // Cancel the default action, if needed
                            event.preventDefault();
                            // Trigger the button element with a click
                            document.getElementById("cmLivechat_sendChatMessage").click();
                        }
                    }

                });
                /*$('#cmLivechat_chatMessage').on('keyup',function(e){
        var maxHeight = 94;
        document.getElementById('cmLivechat_chatMessage').style.height = 'auto';
        var f = document.getElementById('cmLivechat_chatMessage');
        if (f.clientHeight < f.scrollHeight && f.scrollHeight < maxHeight )
            { f.style.height = f.scrollHeight + 'px'; }
        });  */
                $('#cmLivechat_sendChatMessage').click(function()
                {
                    var formattedDate = '<span style="font-size:0.6em;">'+(new Date().getHours() < 10 ? '0'+new Date().getHours() : new Date().getHours())+":"+(new Date().getMinutes() < 10 ? '0'+new Date().getMinutes() : new Date().getMinutes())+"</span><br>";
                    //document.getElementById('cmLivechat_chatMessage').style.height = '20px';
                    //document.getElementById('cmLivechat_chatMessage').style.height = 'auto';
                    if($('#cmLivechat_chatMessage').val().trim() == "") return;
                    $('#cmLivechat_chat').append('<span style="color:'+templateOptions.livechat.csfcColor+';background-color: '+templateOptions.livechat.csbgColor+';font-size: 0.8em;padding:5px;margin:5px;border-radius:5px;display:inline-block;float:right;position:relative;margin-left:30px; word-break: break-word;">'+formattedDate+$('#cmLivechat_chatMessage').val().replace(/(?:\r\n|\r|\n)/g, '<br>')+'</span><br style="clear:both;">');

                    var dataToSend = {};
                    var ts = Math.round((new Date()).getTime() / 1000).toString()+
                        Math.floor(Math.random() * 101).toString();
                    dataToSend.appid = window.cmLivechat_appid;
                    dataToSend.chatID = ts;
                    dataToSend.type = "INCOMING";
                    dataToSend.status = "UNREPLIED";
                    dataToSend.isReplied = false;
                    dataToSend.isAutoreply = false;
                    dataToSend.inReplyTo = null;
                    dataToSend.repliedAt = null;
                    dataToSend.isFirst = false;
                    dataToSend.body = $('#cmLivechat_chatMessage').val().replace(/(?:\r\n|\r|\n)/g, '<br>');
                    dataToSend.initialData = [];
                    dataToSend.from = "";
                    dataToSend.initialChatID = getCookie('cmLivechat_chatID');

                    $('#cmLivechat_chatMessage').val("");
                    var elem = document.getElementById('cmLivechat_chat');
                    elem.scrollTop = elem.scrollHeight;

                    $.post(window.cmLivechat_siteUrl+'/livechat/api/create',dataToSend, function( data ) {
                        //  console.log("POSTED");

                        //document.getElementById('cmLivechat_chatMessage').style.height = '20px';

                    });


                });

            });


        }

        async function playAudio() {
            var audio = new Audio(window.cmLivechat_siteUrl+'/juntos.mp3');
            audio.type = 'audio/mp3';


            await audio.play();

        }

        function renderPopupButton()
        {

            var windowDiv = "<div class='text-center' id='cmLivechat_popupButton' style='color: "+(templateOptions.livechat ? templateOptions.livechat.mfcColor : '#ccc') +';background-color:'+(templateOptions.livechat ?  templateOptions.livechat.bgColor :'#133a61')+";width:60px;height:60px;border-radius:50%;position: fixed;bottom:15.5%;right:0.5%;z-index:2147483648;'></div>";
            $('body').append(windowDiv);
            if(settingsOptions.v4FontAwesome)
            {
                templateOptions.livechat.iconActive = 'fa ' + templateOptions.livechat.iconActive.split(' ')[1];
                templateOptions.livechat.iconInactive = 'fa ' + templateOptions.livechat.iconInactive.split(' ')[1];
            }
            $('#cmLivechat_popupButton').append("<span id='cmLivechat_iconClosed'  style='display:none;'><i class='fa-2x "+templateOptions.livechat.iconInactive+"'></i></span>");
            $('#cmLivechat_popupButton').append("<span id='cmLivechat_iconOpen'><i class='fa-2x "+templateOptions.livechat.iconActive+"'></i></span>");
            setTimeout(function()
            {
                var foundWidthOpen = 0;
                var foundHeightOpen = 0;
                if($('#cmLivechat_iconOpen').children()[0].nodeName.toUpperCase() == 'I')
                {
                    foundWidthOpen = Math.ceil(parseInt($('#cmLivechat_iconOpen').children()[0].getBoundingClientRect().width,10));
                    foundHeightOpen = Math.ceil(parseInt($('#cmLivechat_iconOpen').children()[0].getBoundingClientRect().height,10));
                }
                else
                {
                    foundWidthOpen = Math.ceil(parseInt($($('#cmLivechat_iconOpen').children()[0]).children()[0].getBoundingClientRect().width,10));
                    foundHeightOpen = Math.ceil(parseInt($($('#cmLivechat_iconOpen').children()[0]).children()[0].getBoundingClientRect().height,10));
                }


                var calculatedMarginOpenLeft = (60 - foundWidthOpen) / 2;
                var calculatedMarginOpenTop = (60 - foundHeightOpen) / 2;
                $($('#cmLivechat_iconOpen').children()[0]).css('margin-left',calculatedMarginOpenLeft+'px');
                $($('#cmLivechat_iconOpen').children()[0]).css('margin-top',calculatedMarginOpenTop+'px');



                $('#cmLivechat_iconClosed').css('display','initial');
                var foundWidthClosed = 0;
                var foundHeightClosed = 0;
                if($('#cmLivechat_iconClosed').children()[0].nodeName.toUpperCase() == 'I')
                {
                    foundWidthClosed = Math.ceil(parseInt($('#cmLivechat_iconClosed').children()[0].getBoundingClientRect().width,10));
                    foundHeightClosed = Math.ceil(parseInt($('#cmLivechat_iconClosed').children()[0].getBoundingClientRect().height,10));
                }
                else
                {
                    foundWidthClosed = Math.ceil(parseInt($($('#cmLivechat_iconClosed').children()[0]).children()[0].getBoundingClientRect().width,10));
                    foundHeightClosed = Math.ceil(parseInt($($('#cmLivechat_iconClosed').children()[0]).children()[0].getBoundingClientRect().height,10));
                }




                var calculatedMarginClosedLeft = (60 - foundWidthClosed) / 2;
                var calculatedMarginClosedTop = (60 - foundHeightClosed) / 2;

                $('#cmLivechat_iconClosed').css('display','none');
                $($('#cmLivechat_iconClosed').children()[0]).css('margin-left',calculatedMarginClosedLeft+'px');
                $($('#cmLivechat_iconClosed').children()[0]).css('margin-top',calculatedMarginClosedTop+'px');

                if(templateOptions.livechat.iconInactive.includes('fa-times'))
                {
                    $('#cmLivechat_iconClosed > svg').css('margin-left','21.5px');
                    $('#cmLivechat_iconClosed > svg').css('margin-top','17.5px');

                    $('#cmLivechat_iconClosed > i').css('margin-left','0px');
                    $('#cmLivechat_iconClosed > i').css('margin-top','16px');
                }
                if(templateOptions.livechat.iconActive.includes('fa-comment'))
                {


                    $('#cmLivechat_iconOpen > i').css('margin-left','0px');
                    $('#cmLivechat_iconOpen > i').css('margin-top','16px');
                }
                if(settingsOptions.v4OlderFontAwesome)
                {
                    $('#cmLivechat_iconClosed > i').css('font-size','26px');
                    $('#cmLivechat_iconOpen > i').css('font-size','26px');
                    $('#cmLivechat_iconOpen > i').css('z-index','2147483648');
                    $('#cmLivechat_iconClosed > i').css('z-index','2147483648');
                }


            },100);

            window.cmLivechatIsOpen = false;
            $('#cmLivechat_popupButton').click(function()
            {
                window.cmLivechatIsOpen = !window.cmLivechatIsOpen;
                if(window.cmLivechatIsOpen)
                {
                    $('#cmLivechat_iconClosed').css('display','initial');
                    $('#cmLivechat_iconOpen').css('display','none');
                    $('#cmLivechat_container').css('display','initial');
                    var objDiv = document.getElementById("cmLivechat_chat");
                    if(objDiv)
                        objDiv.scrollTop = objDiv.scrollHeight;



                }
                if(window.cmLivechatIsOpen == false)
                {
                    $('#cmLivechat_iconClosed').css('display','none');
                    $('#cmLivechat_iconOpen').css('display','initial');
                    $('#cmLivechat_container').css('display','none');
                    $('#cmLivechat_igDropper').css('display','none');
                    if($('#cmLivechat_icDropperNWH').css('display') == 'none')
                    {
                        $('#cmLivechat_icDropper').css('display','block');
                        $('#cmLivechat_icDropperNWH').css('display','none');
                    }

                    $('#cmLivechat_container').css('bottom','27%');
                    $('#cmLivechat_container').css('height','405px');

                }


            });


        }
        function doGreetings()
        {
            if(window.cmLivechatIsOpen == false && checkCookie('cmLivechat_chatID') == false)
            {
                $('#cmLivechat_iconClosed').css('display','initial');
                $('#cmLivechat_iconOpen').css('display','none');
                $('#cmLivechat_container').css('display','initial');
                var objDiv = document.getElementById("cmLivechat_chat");
                if(objDiv)
                    objDiv.scrollTop = objDiv.scrollHeight;
                $('#cmLivechat_container').css('bottom','11%');
                $('#cmLivechat_container').css('height','200px');
                $('#cmLivechat_igDropper').css('display','block');
                $('#cmLivechat_icDropper').css('display','none');
                $('#cmLivechat_icDropperNWH').css('display','none');
                window.cmLivechatIsOpen = true;
            }
        }
        function renderWindow()
        {


            var cssBtn = 'display: inline-block;margin-bottom: 0;margin-top:0;margin-left:0.3em;margin-right:0.3em;font-weight: 400;text-align: center;vertical-align: middle;touch-action: manipulation;cursor: pointer;background-image: none;border: 1px solid transparent;white-space: nowrap;padding: 6px 12px;font-size: 0.8em;line-height: 1.42857143;border-radius: 4px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;height:34px;text-transform:none;text-decoration:none;box-sizing: border-box;font-family: Arial, Helvetica, sans-serif;';
            var cssFormControl = 'display: inline-block; width: 85%;height: 20px; padding: 6px 12px;font-size: 0.8em;line-height: 1.42857143;background-color: #fff;background-image: none;border: 1px solid #ccc; border-radius: 4px;-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075); box-shadow: inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;-o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;min-height:34px;text-transform:none;text-decoration:none;box-sizing: border-box;font-family: Arial, Helvetica, sans-serif;margin-left:10px;';
            $('body').append("<div id='cmLivechat_container' style='width:300px;height:400px;position:fixed;bottom:35%;right:4%;display:none;box-sizing:initial;font-size:initial;border-radius:200px;z-index:10000;'></div>");
            $('#cmLivechat_container').append("<div id='cmLivechat_header' style='background-color: " + templateOptions.livechat.bgColor + ";width:300px;height:50px;border-top-left-radius:10px;border-top-right-radius:10px;'></div>");

            if(templateOptions.logo != null)
            {
                $('#cmLivechat_header').append("<img style='max-width:229px;height:40px;margin:5px;float:left;' src='data: "+JSON.parse(templateOptions.livechat.logo).contentType+";base64,"+templateOptions.logo+"'>");

            }
            $('#cmLivechat_header').append("<span  id='cmLivechat_windowClose'><i class='"+(settingsOptions.v4FontAwesome ? "fa " : "fas ")+(settingsOptions.v4OlderFontAwesome?"fa-times":"fa-window-close")+"' style='float:right;color:"+templateOptions.livechat.mfcColor+";padding:5px;' ></i></span>");
            $('#cmLivechat_header').append("<span id='cmLivechat_windowMinimize'><i class='"+(settingsOptions.v4FontAwesome ? "fa " : "fas ")+" fa-minus-square' style='float:right;color:"+templateOptions.livechat.mfcColor+";padding:5px;' ></i></span>");
            $('#cmLivechat_header').append("<span id='cmLivechat_soundOn'><i class='"+(settingsOptions.v4FontAwesome ? "fa " : "fas ")+" fa-bell' style='float:right;color:"+templateOptions.livechat.mfcColor+";padding:5px;' ></i></span>");
            $('#cmLivechat_header').append("<span id='cmLivechat_soundOff' style='display:none;'><i class='"+(settingsOptions.v4FontAwesome ? "fa " : "fas ")+" fa-bell-slash' style='float:right;color:"+templateOptions.livechat.mfcColor+";padding:5px;' ></i></span>");

            $('#cmLivechat_container').append("<div id='cmLivechat_icDropper' style='background-color: " + templateOptions.livechat.fgColor + ";width:300px;height:405px;overflow:auto;overflow-x:hidden;padding-left:5px;padding-right:5px;position:relative;'></div>");
            $('#cmLivechat_container').append("<div id='cmLivechat_icDropperNWH' style='background-color: " + templateOptions.livechat.fgColor + ";width:300px;height:405px;overflow:auto;overflow-x:hidden;padding-left:5px;padding-right:5px;position:relative;display:none'></div>");
            //Initial greeting
            $('#cmLivechat_container').append("<div id='cmLivechat_igDropper' style='background-color: " + templateOptions.livechat.fgColor + ";width:300px;height:105px;overflow:auto;overflow-x:hidden;padding-left:5px;padding-right:5px;position:relative;display:none'></div>");
            var htmlGreeting = '<p style="border-radius:10px;margin:5px;margin-left:10px;padding:5px;background-color:'+templateOptions.livechat.tdbgColor+';color:' + templateOptions.livechat.tdfcColor + '">' + templateOptions.livechat.initialGreeting + '</p>';

            htmlGreeting += '<div style="display:flex;justify-content:center;margin:10px;"><button type="button" id="cmLivechat_greetingButton" style="'+cssBtn+' color:' +templateOptions.livechat.mfcColor + ';background-color:' + templateOptions.livechat.bgColor + '"  >';
            var value = templateOptions.livechat.initialGreetingButtonText;
            htmlGreeting += value;
            htmlGreeting += '</button></div>';
            $('#cmLivechat_igDropper').append(htmlGreeting);

            $('#cmLivechat_greetingButton').click(function()
            {
                $('#cmLivechat_iconClosed').css('display','initial');
                $('#cmLivechat_iconOpen').css('display','none');
                $('#cmLivechat_container').css('display','initial');
                var objDiv = document.getElementById("cmLivechat_chat");
                if(objDiv)
                    objDiv.scrollTop = objDiv.scrollHeight;
                $('#cmLivechat_igDropper').css('display','none');
                $('#cmLivechat_icDropper').css('display','block');
                $('#cmLivechat_icDropperNWH').css('display','none');
                $('#cmLivechat_container').css('bottom','27%');
                $('#cmLivechat_container').css('height','405px');
                window.cmLivechatIsOpen = true;
            });


            $('#cmLivechat_container').append("<div id='cmLivechat_footer' style='background-color: " + templateOptions.livechat.fgColor + ";width:300px;height:30px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;'></div>");
            $('#cmLivechat_footer').append("<small style='color:"+templateOptions.livechat.tdfcColor+";float:right;font-size: 0.6em;padding:3px;'>powered by C-Monitor</small>");

            window.cmLivechat_icData =  [];
            window.cmLivechat_icDataNWH = [];
            var initialData = JSON.parse(templateOptions.livechat.icData);
            var initialDataNWH = JSON.parse(templateOptions.livechat.icDataNWH);
            var groups = templateOptions.groups;
            window.cmLivechat_groups = groups;
            var htmlToAdd = "";
            var localIdsNWH = [];
            for (var j = 0; j < initialDataNWH.length; j++) {
                var type = initialDataNWH[j].type;
                var id = initialDataNWH[j].id;
                var dataText = initialDataNWH[j].data;
                //console.log(initialDataNWH[j]);
                switch (type) {
                    case 'text':
                        var alignment = initialDataNWH[j].alignment ? 'text-align:'+initialDataNWH[j].alignment+';' : '';
                        htmlToAdd = '<p style="'+alignment+'border-radius:10px;margin:5px;margin-left:10px;padding:5px;background-color:'+templateOptions.livechat.tdbgColor+';color:' + templateOptions.livechat.tdfcColor + '" id="' + id + '">' + dataText + '</p>';

                        window.cmLivechat_icDataNWH.push({type: 'text', id: id, data: dataText,alignment: initialDataNWH[j].alignment});
                        $('#cmLivechat_icDropperNWH').append(htmlToAdd);
                        break;
                    case 'label':
                        var alignment = initialDataNWH[j].alignment ? 'text-align:'+initialDataNWH[j].alignment+';' : '';
                        htmlToAdd = '<p style="'+alignment+'margin-top:5px;margin-bottom:5px;margin-left:10px;color:' + templateOptions.livechat.fcColor + '" id="' + id + '">' + dataText + '</p>';

                        window.cmLivechat_icDataNWH.push({type: 'label', id: id, data: dataText,alignment: initialDataNWH[j].alignment});
                        $('#cmLivechat_icDropperNWH').append(htmlToAdd);
                        break;
                    case 'textinput':
                        var extraRequired = '<span '+(initialDataNWH[j].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        htmlToAdd = '<input type="text" style="'+cssFormControl+' margin-top:5px;margin-bottom:5px;color:' + templateOptions.livechat.fcColor + '" id="' + id + '"';
                        var value = initialDataNWH[j].value;
                        var placeholder = initialDataNWH[j].placeholder;
                        var name = initialDataNWH[j].name;
                        if (value != '')
                            htmlToAdd += ' value="' + value + '"';
                        if (placeholder != '')
                            htmlToAdd += ' placeholder="' + placeholder + '"';
                        if (name != '')
                            htmlToAdd += ' name="' + name + '"';
                        htmlToAdd += '>'+extraRequired;
                        window.cmLivechat_icDataNWH.push({
                            type: 'textinput',
                            id: id,
                            name: name,
                            value: value,
                            placeholder: placeholder,
                            required: initialDataNWH[j].required
                        });
                        $('#cmLivechat_icDropperNWH').append(htmlToAdd);
                        localIdsNWH.push(window.cmLivechat_icDataNWH[window.cmLivechat_icDataNWH.length-1].id);
                        if(initialDataNWH[j].required)
                        {
                            var scriptText = '<script>';
                            scriptText += '$("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").on("input propertychange change",function()';
                            scriptText += '{';
                            scriptText += 'if($("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").val() != "")';
                            scriptText += '{';
                            scriptText += '$("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").css("background-color","#fff");';
                            scriptText += '}';
                            scriptText += '});';
                            scriptText += '<\/script>';
                            $('#cmLivechat_icDropper').append(scriptText);
                        }
                        break;
                    case 'nickname':
                        var extraRequired = '<span '+(initialDataNWH[j].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        htmlToAdd = '<input type="text"  data-special="nickname" style="'+cssFormControl+' margin-top:5px;margin-bottom:5px;color:' + templateOptions.livechat.fcColor + '" id="' + id + '"';
                        var value = initialDataNWH[j].value;
                        var placeholder = initialDataNWH[j].placeholder;
                        var name = initialDataNWH[j].name;
                        if (value != '')
                            htmlToAdd += ' value="' + value + '"';
                        if (placeholder != '')
                            htmlToAdd += ' placeholder="' + placeholder + '"';
                        if (name != '')
                            htmlToAdd += ' name="' + name + '"';
                        htmlToAdd += '>'+extraRequired;
                        window.cmLivechat_icDataNWH.push({
                            type: 'nickname',
                            id: id,
                            name: name,
                            value: value,
                            placeholder: placeholder,
                            required: initialDataNWH[j].required
                        });
                        $('#cmLivechat_icDropperNWH').append(htmlToAdd);
                        localIdsNWH.push(window.cmLivechat_icDataNWH[window.cmLivechat_icDataNWH.length-1].id);
                        if(initialDataNWH[j].required)
                        {
                            var scriptText = '<script>';
                            scriptText += '$("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").on("input propertychange change",function()';
                            scriptText += '{';
                            scriptText += 'if($("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").val() != "")';
                            scriptText += '{';
                            scriptText += '$("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").css("background-color","#fff");';
                            scriptText += '}';
                            scriptText += '});';
                            scriptText += '<\/script>';
                            $('#cmLivechat_icDropper').append(scriptText);
                        }
                        break;
                    case 'email':
                        var extraRequired = '<span '+(initialDataNWH[j].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        htmlToAdd = '<input type="email" data-special="email" style="'+cssFormControl+' margin-top:5px;margin-bottom:5px;color:' + templateOptions.livechat.fcColor + '" id="' + id + '"';
                        var value = initialDataNWH[j].value;
                        var placeholder = initialDataNWH[j].placeholder;
                        var name = initialDataNWH[j].name;
                        var pattern = initialDataNWH[j].pattern;
                        if (value != '')
                            htmlToAdd += ' value="' + value + '"';
                        if (placeholder != '')
                            htmlToAdd += ' placeholder="' + placeholder + '"';
                        if (name != '')
                            htmlToAdd += ' name="' + name + '"';
                        if (pattern != '')
                            htmlToAdd += ' pattern="' + pattern + '"';
                        htmlToAdd += '>'+extraRequired;
                        window.cmLivechat_icDataNWH.push({
                            type: 'email',
                            id: id,
                            name: name,
                            value: value,
                            placeholder: placeholder,
                            pattern: pattern,
                            required: initialDataNWH[j].required
                        });
                        $('#cmLivechat_icDropperNWH').append(htmlToAdd);
                        localIdsNWH.push(window.cmLivechat_icDataNWH[window.cmLivechat_icDataNWH.length-1].id);
                        if(initialDataNWH[j].required)
                        {
                            var scriptText = '<script>';
                            scriptText += '$("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").on("input propertychange change",function()';
                            scriptText += '{';
                            scriptText += 'if($("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").val() != "")';
                            scriptText += '{';
                            scriptText += '$("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").css("background-color","#fff");';
                            scriptText += '}';
                            scriptText += '});';
                            scriptText += '<\/script>';
                            $('#cmLivechat_icDropper').append(scriptText);
                        }
                        break;
                    case 'number':
                        var label = initialDataNWH[j].label;
                        var extraRequired = '<span '+(initialDataNWH[j].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        var labelInfo = '<label style="color:'+templateOptions.livechat.fcColor+'">'+label;
                        htmlToAdd = labelInfo+'<input type="tel" data-special="number" style="'+cssFormControl+' margin-top:5px;margin-bottom:5px;margin-left:10px;display:inline-block;width:70%;color:' + templateOptions.livechat.fcColor + '" id="' + id + '"';
                        var value = initialDataNWH[j].value;
                        var placeholder = initialDataNWH[j].placeholder;
                        var name = initialDataNWH[j].name;
                        var pattern = initialDataNWH[j].pattern;

                        if (value != '')
                            htmlToAdd += ' value="' + value + '"';
                        if (placeholder != '')
                            htmlToAdd += ' placeholder="' + placeholder + '"';
                        if (name != '')
                            htmlToAdd += ' name="' + name + '"';
                        if (pattern != '')
                            htmlToAdd += ' pattern="'+pattern+'"';
                        htmlToAdd += '>';
                        htmlToAdd += extraRequired+'</label>';
                        window.cmLivechat_icDataNWH.push({
                            type: 'number',
                            id: id,
                            name: name,
                            value: value,
                            placeholder: placeholder,
                            pattern: pattern,
                            label: label,
                            required: initialDataNWH[j].required
                        });
                        $('#cmLivechat_icDropperNWH').append(htmlToAdd);
                        localIdsNWH.push(window.cmLivechat_icDataNWH[window.cmLivechat_icDataNWH.length-1].id);
                        if(initialDataNWH[j].required)
                        {
                            var scriptText = '<script>';
                            scriptText += '$("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").on("input propertychange change",function()';
                            scriptText += '{';
                            scriptText += 'if($("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").val() != "")';
                            scriptText += '{';
                            scriptText += '$("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").css("background-color","#fff");';
                            scriptText += '}';
                            scriptText += '});';
                            scriptText += '<\/script>';
                            $('#cmLivechat_icDropper').append(scriptText);
                        }
                        break;
                    case 'textarea':
                        var extraRequired = '<span '+(initialDataNWH[j].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        htmlToAdd = '<textarea rows="5" style="'+cssFormControl+' margin-top:5px;margin-bottom:5px;resize: none;height:initial;color:' + templateOptions.livechat.fcColor + '" id="' + id + '"';
                        var value = initialDataNWH[j].value;
                        var placeholder = initialDataNWH[j].placeholder;
                        var name = initialDataNWH[j].name;
                        if (value != '')
                            htmlToAdd += ' value="' + value + '"';
                        if (placeholder != '')
                            htmlToAdd += ' placeholder="' + placeholder + '"';
                        if (name != '')
                            htmlToAdd += ' name="' + name + '"';
                        htmlToAdd += '></textarea>'+extraRequired;
                        window.cmLivechat_icDataNWH.push({
                            type: 'textarea',
                            id: id,
                            name: name,
                            value: value,
                            placeholder: placeholder,
                            required: initialDataNWH[j].required
                        });
                        $('#cmLivechat_icDropperNWH').append(htmlToAdd);
                        localIdsNWH.push(window.cmLivechat_icDataNWH[window.cmLivechat_icDataNWH.length-1].id);
                        if(initialDataNWH[j].required)
                        {
                            var scriptText = '<script>';
                            scriptText += '$("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").on("input propertychange change",function()';
                            scriptText += '{';
                            scriptText += 'if($("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").val() != "")';
                            scriptText += '{';
                            scriptText += '$("#'+localIdsNWH[localIdsNWH.length-1].toString()+'").css("background-color","#fff");';
                            scriptText += '}';
                            scriptText += '});';
                            scriptText += '<\/script>';
                            $('#cmLivechat_icDropper').append(scriptText);
                        }
                        break;
                    case 'dropdown':
                        var name = initialDataNWH[j].name;
                        var extraRequired = '<span '+(initialDataNWH[j].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        htmlToAdd = '<select name="' + name + '" style="'+cssFormControl+'color:' + templateOptions.livechat.fcColor + ';margin-top:5px;margin-bottom:5px;height:34px;width:99%" >';
                        var dataArray = initialDataNWH[j].options;
                        for (var z = 0; z < dataArray.length; z++)
                            htmlToAdd += '<option value="' + dataArray[z] + '">' + dataArray[z] + '</option>';
                        htmlToAdd += '</select>'+extraRequired;
                        window.cmLivechat_icDataNWH.push({type: 'dropdown', id: id, name: name, options: dataArray});
                        $('#cmLivechat_icDropperNWH').append(htmlToAdd);

                        break;
                    case 'group_dropdown':
                        var extraRequired = '<span '+(initialDataNWH[j].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        var name = initialDataNWH[j].name;
                        htmlToAdd = '<select id="'+id+'" data-type="group_dd" name="' + name + '" style="'+cssFormControl+' color:' + templateOptions.livechat.fcColor + ';margin-top:5px;margin-bottom:5px;height:34px;width:85%;" >';
                        // console.log(dataArray);
                        for (var d = 0; d < groups.length; d++)
                            htmlToAdd += '<option value="' + groups[d]._id + '">' + groups[d].name + '</option>';
                        htmlToAdd += '</select>'+extraRequired;
                        window.cmLivechat_icDataNWH.push({type: 'group_dropdown', id: id, name: name});
                        $('#cmLivechat_icDropperNWH').append(htmlToAdd);

                        break;
                    case 'submit_btn':
                        htmlToAdd = '<div style="display:flex;justify-content:center;margin:10px;"><button  id="' + id + '" type="text"  style="'+cssBtn+' color:' +templateOptions.livechat.mfcColor + ';background-color:' + templateOptions.livechat.bgColor + '"  >';
                        var value = initialDataNWH[j].value;
                        htmlToAdd += value;
                        htmlToAdd += '</button></div>';
                        window.cmLivechat_icDataNWH.push({type: 'submit_btn', id: id, value: value});



                        $('#cmLivechat_icDropperNWH').append(htmlToAdd);
                        $('#'+id.toString()).click(function()
                        {
                            var dataToSend = {};
                            var ts = Math.round((new Date()).getTime() / 1000).toString()+
                                Math.floor(Math.random() * 101).toString();
                            dataToSend.appid = window.cmLivechat_appid;
                            dataToSend.chatID = ts;
                            dataToSend.type = "INCOMING";
                            dataToSend.status = "UNREPLIED";
                            dataToSend.isReplied = false;
                            dataToSend.isAutoreply = false;
                            dataToSend.inReplyTo = null;
                            dataToSend.repliedAt = null;
                            dataToSend.isFirst = true;
                            dataToSend.initialData = [];
                            dataToSend.from = "";

                            var allGoodNWH = true;
                            for(var j = 0;j < window.cmLivechat_icDataNWH.length;j++)
                            {
                                var type = window.cmLivechat_icDataNWH[j].type;
                                switch(type)
                                {
                                    case 'nickname':

                                        if(window.cmLivechat_icDataNWH[j].required == true && $('#'+window.cmLivechat_icDataNWH[j].id).val().trim() == '')
                                        {
                                            allGoodNWH = false;
                                            $('#'+window.cmLivechat_icDataNWH[j].id).css('background-color',templateOptions.livechat.errorColor);

                                        }
                                        dataToSend.initialData.push(
                                            {
                                                type: 'nickname',
                                                name: window.cmLivechat_icDataNWH[j].name,
                                                value: $('#'+window.cmLivechat_icDataNWH[j].id).val()
                                            });
                                        break;
                                    case 'email':
                                        dataToSend.from = $('#'+window.cmLivechat_icDataNWH[j].id).val();
                                        if($('#'+window.cmLivechat_icDataNWH[j].id).attr('pattern') != '' && $('#'+window.cmLivechat_icDataNWH[j].id).attr('pattern') != undefined)
                                        {
                                            var pattern = new RegExp($('#'+window.cmLivechat_icDataNWH[j].id).attr('pattern'),'gi');
                                            if(pattern.test($('#'+window.cmLivechat_icDataNWH[j].id).val()) == false)
                                                $('#'+window.cmLivechat_icDataNWH[j].id).css('background-color',templateOptions.livechat.errorColor);
                                            allGoodNWH = false;

                                        }
                                        if(window.cmLivechat_icDataNWH[j].required == true && $('#'+window.cmLivechat_icDataNWH[j].id).val().trim() == '')
                                        {
                                            allGoodNWH = false;

                                            $('#'+window.cmLivechat_icDataNWH[j].id).css('background-color',templateOptions.livechat.errorColor);
                                        }
                                        dataToSend.initialData.push(
                                            {
                                                type: 'email',
                                                name: window.cmLivechat_icDataNWH[j].name,
                                                value: $('#'+window.cmLivechat_icDataNWH[j].id).val()
                                            });
                                        break;
                                    case 'number':

                                        if($('#'+window.cmLivechat_icDataNWH[j].id).attr('pattern') != '' && $('#'+window.cmLivechat_icDataNWH[j].id).attr('pattern') != undefined)
                                        {
                                            var pattern = new RegExp($('#'+window.cmLivechat_icDataNWH[j].id).attr('pattern'),'gi');
                                            if(pattern.test($('#'+window.cmLivechat_icDataNWH[j].id).val()) == false)
                                            {
                                                $('#'+window.cmLivechat_icDataNWH[j].id).css('background-color',templateOptions.livechat.errorColor);
                                                allGoodNWH = false;

                                            }
                                        }
                                        if(window.cmLivechat_icDataNWH[j].required == true && $('#'+window.cmLivechat_icDataNWH[j].id).val().trim() == '')
                                        {
                                            allGoodNWH = false;
                                            $('#'+window.cmLivechat_icDataNWH[j].id).css('background-color',templateOptions.livechat.errorColor);

                                        }
                                        dataToSend.initialData.push(
                                            {
                                                type: 'number',
                                                name: window.cmLivechat_icDataNWH[j].name,
                                                value: $('#'+window.cmLivechat_icDataNWH[j].id).val(),
                                                label: $('#'+window.cmLivechat_icDataNWH[j].id)[0].parentElement.nodeName == "LABEL" ? $($('#'+window.cmLivechat_icDataNWH[j].id)[0].parentElement).contents().first()[0].textContent : ""
                                            });
                                        break;
                                    case 'group_dropdown':


                                        dataToSend.to = $('#'+window.cmLivechat_icDataNWH[j].id).val();
                                        break;
                                    case 'dropdown':
                                        dataToSend.initialData.push(
                                            {
                                                type: 'dropdown',
                                                name: window.cmLivechat_icDataNWH[j].name,
                                                value: $('#'+window.cmLivechat_icDataNWH[j].id).val()
                                            });
                                        break;
                                    case 'textinput':
                                        if(window.cmLivechat_icDataNWH[j].required == true && $('#'+window.cmLivechat_icDataNWH[j].id).val().trim() == '')
                                        {
                                            allGoodNWH = false;
                                            $('#'+window.cmLivechat_icDataNWH[j].id).css('background-color',templateOptions.livechat.errorColor);
                                        }
                                        dataToSend.initialData.push(
                                            {
                                                type: 'textinput',
                                                name: window.cmLivechat_icDataNWH[j].name,
                                                value: $('#'+window.cmLivechat_icDataNWH[j].id).val()
                                            });
                                        break;
                                    case 'textarea':
                                        if(window.cmLivechat_icDataNWH[j].required == true && $('#'+window.cmLivechat_icDataNWH[j].id).val().trim() == '')
                                        {
                                            allGoodNWH = false;
                                            $('#'+window.cmLivechat_icDataNWH[j].id).css('background-color',templateOptions.livechat.errorColor);
                                        }
                                        dataToSend.initialData.push(
                                            {
                                                type: 'textarea',
                                                name: window.cmLivechat_icDataNWH[j].name,
                                                value: $('#'+window.cmLivechat_icDataNWH[j].id).val()
                                            });
                                        break;
                                }
                            }
                            if(allGoodNWH == false)
                            {

                                return;
                            }
                            if(dataToSend.to == '' || dataToSend.to == undefined || dataToSend.to == null)
                                dataToSend.to = window.cmLivechat_groups[0]._id;
                            setCookie('cmLivechat_chatID',ts);
                            dataToSend.initialData = JSON.stringify(dataToSend.initialData);
                            window.cmLivechat_socket = io(window.cmLivechat_socketUrl);
                            window.cmLivechat_socket.emit('cmLivechat_Online',{chatID: getCookie('cmLivechat_chatID')});
                            window.cmLivechat_socket.on('cmLivechat_message', function(data){
                                console.log(data);
                                var formattedDate = '<span style="font-size:0.6em;">'+data.name+' '+(new Date(data.date).getHours() < 10 ? '0'+new Date(data.date).getHours() : new Date(data.date).getHours())+":"+(new Date(data.date).getMinutes() < 10 ? '0'+new Date(data.date).getMinutes() : new Date(data.date).getMinutes())+"</span><br>";
                                $('#cmLivechat_chat').append('<span style="color:'+templateOptions.livechat.crfcColor+';background-color:'+templateOptions.livechat.crbgColor+';font-size: 0.8em;padding:5px;margin:5px;border-radius:5px;display:inline-block;float:left;position:relative;margin-right:30px; word-break: break-word;">'+formattedDate+data.text+'</span><br style="clear:both;">');
                                var elem = document.getElementById('cmLivechat_chat');
                                elem.scrollTop = elem.scrollHeight;

                                window.cmLivechatIsOpen = true;
                                if(window.cmLivechatIsOpen)
                                {
                                    $('#cmLivechat_iconClosed').css('display','initial');
                                    $('#cmLivechat_iconOpen').css('display','none');
                                    $('#cmLivechat_container').css('display','initial');
                                }
                                if(window.cmLivechat_soundWorks)
                                    playAudio();

                            });

                            $.post(window.cmLivechat_siteUrl+'/livechat/api/create',dataToSend, function( data ) {
                                console.log("POSTED");
                                $('#cmLivechat_icDropperNWH').empty();
                                $('#cmLivechat_icDropperNWH').css('display','none');
                                $('#cmLivechat_icDropper').css('display','block');
                                $('#cmLivechat_icDropper').empty();
                                $('#cmLivechat_icDropper').append('<textarea rows="5" id="cmLivechat_chatMessage" type="text" style="'+cssFormControl+' margin-top:5px;margin-bottom:5px;color:' + templateOptions.livechat.fcColor + ';width:97% !important;position:absolute;bottom:22px;resize: none;margin-left:0px;height:90px;z-index:30000;" ></textarea>');
                                $('#cmLivechat_icDropper').append('<button id="cmLivechat_sendChatMessage" type="button" style="'+cssBtn+' margin-top:5px;margin-bottom:5px;color:' + templateOptions.livechat.fcColor + ';width:auto;height:34px;padding:0;background-color:transparent;position:absolute;bottom:0px;margin:0;right:0px;font-size:23px;text-transform:none;"><i class="'+(settingsOptions.v4FontAwesome ? "fa fa-paper-plane" : "fab fa-telegram-plane")+' "></i></button>');
                                $('#cmLivechat_icDropper').append("<div id='cmLivechat_chat' style='background-color: " + templateOptions.livechat.fgColor + ";width:300px;height:280px;overflow:auto;padding-left:5px;padding-right:5px;position:relative;'></div>");
                                var input = document.getElementById("cmLivechat_chatMessage");

// Execute a function when the user releases a key on the keyboard
                                input.addEventListener("keyup", function(event) {
                                    // Number 13 is the "Enter" key on the keyboard
                                    if (event.key === "Enter") {
                                        if(event.shiftKey)
                                        {
                                            //$('#cmLivechat_chatMessage').val($('#cmLivechat_chatMessage').val()+"\n");
                                        }
                                        else
                                        {
                                            // Cancel the default action, if needed
                                            event.preventDefault();
                                            // Trigger the button element with a click
                                            document.getElementById("cmLivechat_sendChatMessage").click();
                                        }
                                    }

                                });
                                /*$('#cmLivechat_chatMessage').on('keyup',function(e){
                                var maxHeight = 94;
                                document.getElementById('cmLivechat_chatMessage').style.height = 'auto';
                                var f = document.getElementById('cmLivechat_chatMessage');
                                if (f.clientHeight < f.scrollHeight && f.scrollHeight < maxHeight )
                                    { f.style.height = f.scrollHeight + 'px'; }
                                });  */
                                $('#cmLivechat_sendChatMessage').click(function()
                                {
                                    var formattedDate = '<span style="font-size:0.6em;">'+(new Date().getHours() < 10 ? '0'+new Date().getHours() : new Date().getHours())+":"+(new Date().getMinutes() < 10 ? '0'+new Date().getMinutes() : new Date().getMinutes())+"</span><br>";
                                    //document.getElementById('cmLivechat_chatMessage').style.height = '20px';
                                    //document.getElementById('cmLivechat_chatMessage').style.height = 'auto';

                                    if($('#cmLivechat_chatMessage').val().trim() == "") return;
                                    $('#cmLivechat_chat').append('<span style="color:'+templateOptions.livechat.csfcColor+';background-color: '+templateOptions.livechat.csbgColor+';font-size: 0.8em;padding:5px;margin:5px;border-radius:5px;display:inline-block;float:right;position:relative;margin-left:30px; word-break: break-word;">'+formattedDate+$('#cmLivechat_chatMessage').val().replace(/(?:\r\n|\r|\n)/g, '<br>')+'</span><br style="clear:both;">');

                                    var dataToSend = {};
                                    var ts = Math.round((new Date()).getTime() / 1000).toString()+
                                        Math.floor(Math.random() * 101).toString();
                                    dataToSend.appid = window.cmLivechat_appid;
                                    dataToSend.chatID = ts;
                                    dataToSend.type = "INCOMING";
                                    dataToSend.status = "UNREPLIED";
                                    dataToSend.isReplied = false;
                                    dataToSend.isAutoreply = false;
                                    dataToSend.inReplyTo = null;
                                    dataToSend.repliedAt = null;
                                    dataToSend.isFirst = false;
                                    dataToSend.body = $('#cmLivechat_chatMessage').val().replace(/(?:\r\n|\r|\n)/g, '<br>');
                                    dataToSend.initialData = [];
                                    dataToSend.from = "";
                                    dataToSend.initialChatID = getCookie('cmLivechat_chatID');

                                    $('#cmLivechat_chatMessage').val("");
                                    var elem = document.getElementById('cmLivechat_chat');
                                    elem.scrollTop = elem.scrollHeight;

                                    $.post(window.cmLivechat_siteUrl+'/livechat/api/create',dataToSend, function( data ) {
                                        //  console.log("POSTED");
                                        //document.getElementById('cmLivechat_chatMessage').style.height = '20px';


                                    });


                                });

                            });


                        });
                        break;
                }
            }
            htmlToAdd = "";
            var localIds = [];
            for (var i = 0; i < initialData.length; i++) {
                var type = initialData[i].type;
                var id = initialData[i].id;

                var dataText = initialData[i].data;
                //console.log(initialData[i]);
                switch (type) {
                    case 'text':
                        var alignment = initialData[i].alignment ? 'text-align:'+initialData[i].alignment+';' : '';
                        htmlToAdd = '<p style="'+alignment+'border-radius:10px;margin:5px;margin-left:10px;padding:5px;background-color:'+templateOptions.livechat.tdbgColor+';color:' + templateOptions.livechat.tdfcColor + '" id="' + id + '">' + dataText + '</p>';

                        window.cmLivechat_icData.push({type: 'text', id: id, data: dataText,alignment: initialData[i].alignment});
                        $('#cmLivechat_icDropper').append(htmlToAdd);
                        break;
                    case 'label':
                        var alignment = initialData[i].alignment ? 'text-align:'+initialData[i].alignment+';' : '';
                        htmlToAdd = '<p style="'+alignment+'margin-top:5px;margin-bottom:5px;margin-left:10px;color:' + templateOptions.livechat.fcColor + '" id="' + id + '">' + dataText + '</p>';

                        window.cmLivechat_icData.push({type: 'label', id: id, data: dataText,alignment: initialData[i].alignment});
                        $('#cmLivechat_icDropper').append(htmlToAdd);
                        break;
                    case 'textinput':
                        var extraRequired = '<span '+(initialData[i].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        htmlToAdd = '<input type="text" style="'+cssFormControl+' margin-top:5px;margin-bottom:5px;color:' + templateOptions.livechat.fcColor + '" id="' + id + '"';
                        var value = initialData[i].value;
                        var placeholder = initialData[i].placeholder;
                        var name = initialData[i].name;
                        if (value != '')
                            htmlToAdd += ' value="' + value + '"';
                        if (placeholder != '')
                            htmlToAdd += ' placeholder="' + placeholder + '"';
                        if (name != '')
                            htmlToAdd += ' name="' + name + '"';
                        htmlToAdd += '>'+extraRequired;
                        window.cmLivechat_icData.push({
                            type: 'textinput',
                            id: id,
                            name: name,
                            value: value,
                            placeholder: placeholder,
                            required: initialData[i].required
                        });
                        $('#cmLivechat_icDropper').append(htmlToAdd);
                        localIds.push(window.cmLivechat_icData[window.cmLivechat_icData.length-1].id);
                        if(initialData[i].required)
                        {
                            var scriptText = '<script>';
                            scriptText += '$("#'+localIds[localIds.length-1].toString()+'").on("input propertychange change",function()';
                            scriptText += '{';
                            scriptText += 'if($("#'+localIds[localIds.length-1].toString()+'").val() != "")';
                            scriptText += '{';
                            scriptText += '$("#'+localIds[localIds.length-1].toString()+'").css("background-color","#fff");';
                            scriptText += '}';
                            scriptText += '});';
                            scriptText += '<\/script>';
                            $('#cmLivechat_icDropper').append(scriptText);
                        }
                        break;
                    case 'nickname':
                        var extraRequired = '<span '+(initialData[i].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        htmlToAdd = '<input type="text"  data-special="nickname" style="'+cssFormControl+' margin-top:5px;margin-bottom:5px;color:' + templateOptions.livechat.fcColor + '" id="' + id + '"';
                        var value = initialData[i].value;
                        var placeholder = initialData[i].placeholder;
                        var name = initialData[i].name;
                        if (value != '')
                            htmlToAdd += ' value="' + value + '"';
                        if (placeholder != '')
                            htmlToAdd += ' placeholder="' + placeholder + '"';
                        if (name != '')
                            htmlToAdd += ' name="' + name + '"';
                        htmlToAdd += '>'+extraRequired;
                        window.cmLivechat_icData.push({
                            type: 'nickname',
                            id: id,
                            name: name,
                            value: value,
                            placeholder: placeholder,
                            required: initialData[i].required
                        });
                        $('#cmLivechat_icDropper').append(htmlToAdd);
                        localIds.push(window.cmLivechat_icData[window.cmLivechat_icData.length-1].id);
                        if(initialData[i].required)
                        {
                            var scriptText = '<script>';
                            scriptText += '$("#'+localIds[localIds.length-1].toString()+'").on("input propertychange change",function()';
                            scriptText += '{';
                            scriptText += 'if($("#'+localIds[localIds.length-1].toString()+'").val() != "")';
                            scriptText += '{';
                            scriptText += '$("#'+localIds[localIds.length-1].toString()+'").css("background-color","#fff");';
                            scriptText += '}';
                            scriptText += '});';
                            scriptText += '<\/script>';
                            $('#cmLivechat_icDropper').append(scriptText);
                        }
                        break;
                    case 'email':
                        var extraRequired = '<span '+(initialData[i].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        htmlToAdd = '<input type="email" data-special="email" style="'+cssFormControl+' margin-top:5px;margin-bottom:5px;color:' + templateOptions.livechat.fcColor + '" id="' + id + '"';
                        var value = initialData[i].value;
                        var placeholder = initialData[i].placeholder;
                        var name = initialData[i].name;
                        var pattern = initialData[i].pattern;
                        if (value != '')
                            htmlToAdd += ' value="' + value + '"';
                        if (placeholder != '')
                            htmlToAdd += ' placeholder="' + placeholder + '"';
                        if (name != '')
                            htmlToAdd += ' name="' + name + '"';
                        if (pattern != '')
                            htmlToAdd += ' pattern="' + pattern + '"';
                        htmlToAdd += '>'+extraRequired;
                        window.cmLivechat_icData.push({
                            type: 'email',
                            id: id,
                            name: name,
                            value: value,
                            placeholder: placeholder,
                            pattern: pattern,
                            required: initialData[i].required
                        });
                        $('#cmLivechat_icDropper').append(htmlToAdd);
                        localIds.push(window.cmLivechat_icData[window.cmLivechat_icData.length-1].id);
                        if(initialData[i].required)
                        {
                            var scriptText = '<script>';
                            scriptText += '$("#'+localIds[localIds.length-1].toString()+'").on("input propertychange change",function()';
                            scriptText += '{';
                            scriptText += 'if($("#'+localIds[localIds.length-1].toString()+'").val() != "")';
                            scriptText += '{';
                            scriptText += '$("#'+localIds[localIds.length-1].toString()+'").css("background-color","#fff");';
                            scriptText += '}';
                            scriptText += '});';
                            scriptText += '<\/script>';
                            $('#cmLivechat_icDropper').append(scriptText);
                        }
                        break;
                    case 'number':
                        var label = initialData[i].label;
                        var extraRequired = '<span '+(initialData[i].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        var labelInfo = '<label style="color:'+templateOptions.livechat.fcColor+'">'+label;
                        htmlToAdd = labelInfo+'<input type="tel" data-special="number" style="'+cssFormControl+' margin-top:5px;margin-bottom:5px;margin-left:10px;display:inline-block;width:70%;color:' + templateOptions.livechat.fcColor + '" id="' + id + '"';
                        var value = initialData[i].value;
                        var placeholder = initialData[i].placeholder;
                        var name = initialData[i].name;
                        var pattern = initialData[i].pattern;

                        if (value != '')
                            htmlToAdd += ' value="' + value + '"';
                        if (placeholder != '')
                            htmlToAdd += ' placeholder="' + placeholder + '"';
                        if (name != '')
                            htmlToAdd += ' name="' + name + '"';
                        if (pattern != '')
                            htmlToAdd += ' pattern="'+pattern+'"';
                        htmlToAdd += '>';

                        htmlToAdd += extraRequired+'</label>';
                        window.cmLivechat_icData.push({
                            type: 'number',
                            id: id,
                            name: name,
                            value: value,
                            placeholder: placeholder,
                            pattern: pattern,
                            label: label,
                            required: initialData[i].required
                        });
                        $('#cmLivechat_icDropper').append(htmlToAdd);
                        localIds.push(window.cmLivechat_icData[window.cmLivechat_icData.length-1].id);
                        if(initialData[i].required)
                        {
                            var scriptText = '<script>';
                            scriptText += '$("#'+localIds[localIds.length-1].toString()+'").on("input propertychange change",function()';
                            scriptText += '{';
                            scriptText += 'if($("#'+localIds[localIds.length-1].toString()+'").val() != "")';
                            scriptText += '{';
                            scriptText += '$("#'+localIds[localIds.length-1].toString()+'").css("background-color","#fff");';
                            scriptText += '}';
                            scriptText += '});';
                            scriptText += '<\/script>';
                            $('#cmLivechat_icDropper').append(scriptText);
                        }
                        break;
                    case 'textarea':
                        var extraRequired = '<span '+(initialData[i].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        htmlToAdd = '<textarea rows="5" style="'+cssFormControl+' margin-top:5px;resize: none;height:initial;margin-bottom:5px;color:' + templateOptions.livechat.fcColor + '" id="' + id + '"';
                        var value = initialData[i].value;
                        var placeholder = initialData[i].placeholder;
                        var name = initialData[i].name;
                        if (value != '')
                            htmlToAdd += ' value="' + value + '"';
                        if (placeholder != '')
                            htmlToAdd += ' placeholder="' + placeholder + '"';
                        if (name != '')
                            htmlToAdd += ' name="' + name + '"';
                        htmlToAdd += '></textarea>'+extraRequired;
                        window.cmLivechat_icData.push({
                            type: 'textarea',
                            id: id,
                            name: name,
                            value: value,
                            placeholder: placeholder,
                            required: initialData[i].required
                        });
                        $('#cmLivechat_icDropper').append(htmlToAdd);

                        localIds.push(window.cmLivechat_icData[window.cmLivechat_icData.length-1].id);
                        if(initialData[i].required)
                        {
                            var scriptText = '<script>';
                            scriptText += '$("#'+localIds[localIds.length-1].toString()+'").on("input propertychange change",function()';
                            scriptText += '{';
                            scriptText += 'if($("#'+localIds[localIds.length-1].toString()+'").val() != "")';
                            scriptText += '{';
                            scriptText += '$("#'+localIds[localIds.length-1].toString()+'").css("background-color","#fff");';
                            scriptText += '}';
                            scriptText += '});';
                            scriptText += '<\/script>';
                            $('#cmLivechat_icDropper').append(scriptText);
                        }
                        break;
                    case 'dropdown':
                        var name = initialData[i].name;
                        var extraRequired = '<span '+(initialData[i].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        htmlToAdd = '<select name="' + name + '" style="'+cssFormControl+'color:' + templateOptions.livechat.fcColor + ';margin-top:5px;margin-bottom:5px;height:34px;width:99%" >';
                        var dataArray = initialData[i].options;
                        for (var z = 0; z < dataArray.length; z++)
                            htmlToAdd += '<option value="' + dataArray[z] + '">' + dataArray[z] + '</option>';
                        htmlToAdd += '</select>'+extraRequired;
                        window.cmLivechat_icData.push({type: 'dropdown', id: id, name: name, options: dataArray});
                        $('#cmLivechat_icDropper').append(htmlToAdd);

                        break;
                    case 'group_dropdown':
                        var extraRequired = '<span '+(initialData[i].required == true? "class='cmLivechat_required'" : "")+'></span>';
                        var name = initialData[i].name;
                        htmlToAdd = '<select id="'+id+'" data-type="group_dd" name="' + name + '" style="'+cssFormControl+' color:' + templateOptions.livechat.fcColor + ';margin-top:5px;margin-bottom:5px;height:34px;width:85%" >';
                        // console.log(dataArray);
                        for (var d = 0; d < groups.length; d++)
                            htmlToAdd += '<option value="' + groups[d]._id + '">' + groups[d].name + '</option>';
                        htmlToAdd += '</select>'+extraRequired;
                        window.cmLivechat_icData.push({type: 'group_dropdown', id: id, name: name});
                        $('#cmLivechat_icDropper').append(htmlToAdd);
                        break;
                    case 'submit_btn':
                        htmlToAdd = '<div style="display:flex;justify-content:center;margin:10px;"><button  id="' + id + '" type="text"  style="'+cssBtn+' color:' +templateOptions.livechat.mfcColor + ';background-color:' + templateOptions.livechat.bgColor + '"  >';
                        var value = initialData[i].value;
                        htmlToAdd += value;
                        htmlToAdd += '</button></div>';
                        window.cmLivechat_icData.push({type: 'submit_btn', id: id, value: value});



                        $('#cmLivechat_icDropper').append(htmlToAdd);
                        $('#'+id.toString()).click(function()
                        {
                            var dataToSend = {};
                            var ts = Math.round((new Date()).getTime() / 1000).toString()+
                                Math.floor(Math.random() * 101).toString();
                            dataToSend.appid = window.cmLivechat_appid;
                            dataToSend.chatID = ts;
                            dataToSend.type = "INCOMING";
                            dataToSend.status = "UNREPLIED";
                            dataToSend.isReplied = false;
                            dataToSend.isAutoreply = false;
                            dataToSend.inReplyTo = null;
                            dataToSend.repliedAt = null;
                            dataToSend.isFirst = true;
                            dataToSend.initialData = [];
                            dataToSend.from = "";

                            var allGood = true;

                            for(var i = 0;i < window.cmLivechat_icData.length;i++)
                            {
                                var type = window.cmLivechat_icData[i].type;
                                switch(type)
                                {
                                    case 'nickname':

                                        if(window.cmLivechat_icData[i].required == true && $('#'+window.cmLivechat_icData[i].id).val().trim() == '')
                                        {
                                            allGood = false;
                                            $('#'+window.cmLivechat_icData[i].id).css('background-color',templateOptions.livechat.errorColor);

                                        }
                                        dataToSend.initialData.push(
                                            {
                                                type: 'nickname',
                                                name: window.cmLivechat_icData[i].name,
                                                value: $('#'+window.cmLivechat_icData[i].id).val()
                                            });
                                        break;
                                    case 'email':
                                        dataToSend.from = $('#'+window.cmLivechat_icData[i].id).val();
                                        if($('#'+window.cmLivechat_icData[i].id).attr('pattern') != '' && $('#'+window.cmLivechat_icData[i].id).attr('pattern') != undefined)
                                        {
                                            var pattern = new RegExp($('#'+window.cmLivechat_icData[i].id).attr('pattern'),'gi');
                                            if(pattern.test($('#'+window.cmLivechat_icData[i].id).val()) == false)
                                                $('#'+window.cmLivechat_icData[i].id).css('background-color',templateOptions.livechat.errorColor);
                                            allGood = false;

                                        }
                                        if(window.cmLivechat_icData[i].required == true && $('#'+window.cmLivechat_icData[i].id).val().trim() == '')
                                        {
                                            allGood = false;

                                            $('#'+window.cmLivechat_icData[i].id).css('background-color',templateOptions.livechat.errorColor);
                                        }
                                        dataToSend.initialData.push(
                                            {
                                                type: 'email',
                                                name: window.cmLivechat_icData[i].name,
                                                value: $('#'+window.cmLivechat_icData[i].id).val()
                                            });
                                        break;
                                    case 'number':

                                        if($('#'+window.cmLivechat_icData[i].id).attr('pattern') != '' && $('#'+window.cmLivechat_icData[i].id).attr('pattern') != undefined)
                                        {
                                            var pattern = new RegExp($('#'+window.cmLivechat_icData[i].id).attr('pattern'),'gi');
                                            if(pattern.test($('#'+window.cmLivechat_icData[i].id).val()) == false)
                                            {
                                                $('#'+window.cmLivechat_icData[i].id).css('background-color',templateOptions.livechat.errorColor);
                                                allGood = false;

                                            }
                                        }
                                        if(window.cmLivechat_icData[i].required == true && $('#'+window.cmLivechat_icData[i].id).val().trim() == '')
                                        {
                                            allGood = false;
                                            $('#'+window.cmLivechat_icData[i].id).css('background-color',templateOptions.livechat.errorColor);

                                        }
                                        dataToSend.initialData.push(
                                            {
                                                type: 'number',
                                                name: window.cmLivechat_icData[i].name,
                                                value: $('#'+window.cmLivechat_icData[i].id).val(),
                                                label: $('#'+window.cmLivechat_icData[i].id)[0].parentElement.nodeName == "LABEL" ? $($('#'+window.cmLivechat_icData[i].id)[0].parentElement).contents().first()[0].textContent : ""
                                            });
                                        break;
                                    case 'group_dropdown':


                                        dataToSend.to = $('#'+window.cmLivechat_icData[i].id).val();
                                        break;
                                    case 'dropdown':
                                        dataToSend.initialData.push(
                                            {
                                                type: 'dropdown',
                                                name: window.cmLivechat_icData[i].name,
                                                value: $('#'+window.cmLivechat_icData[i].id).val()
                                            });
                                        break;
                                    case 'textinput':
                                        if(window.cmLivechat_icData[i].required == true && $('#'+window.cmLivechat_icData[i].id).val().trim() == '')
                                        {
                                            allGood = false;
                                            $('#'+window.cmLivechat_icData[i].id).css('background-color',templateOptions.livechat.errorColor);
                                        }
                                        dataToSend.initialData.push(
                                            {
                                                type: 'textinput',
                                                name: window.cmLivechat_icData[i].name,
                                                value: $('#'+window.cmLivechat_icData[i].id).val()
                                            });
                                        break;
                                    case 'textarea':
                                        if(window.cmLivechat_icData[i].required == true && $('#'+window.cmLivechat_icData[i].id).val().trim() == '')
                                        {
                                            allGood = false;
                                            $('#'+window.cmLivechat_icData[i].id).css('background-color',templateOptions.livechat.errorColor);
                                        }
                                        dataToSend.initialData.push(
                                            {
                                                type: 'textarea',
                                                name: window.cmLivechat_icData[i].name,
                                                value: $('#'+window.cmLivechat_icData[i].id).val()
                                            });
                                        break;
                                }
                            }
                            if(allGood == false)
                            {

                                return;
                            }
                            if(dataToSend.to == '' || dataToSend.to == undefined || dataToSend.to == null)
                                dataToSend.to = window.cmLivechat_groups[0]._id;
                            setCookie('cmLivechat_chatID',ts);
                            dataToSend.initialData = JSON.stringify(dataToSend.initialData);
                            window.cmLivechat_socket = io(window.cmLivechat_socketUrl);
                            window.cmLivechat_socket.emit('cmLivechat_Online',{chatID: getCookie('cmLivechat_chatID')});
                            window.cmLivechat_socket.on('cmLivechat_message', function(data){
                                console.log(data);
                                var formattedDate = '<span style="font-size:0.6em;">'+data.name+' '+(new Date(data.date).getHours() < 10 ? '0'+new Date(data.date).getHours() : new Date(data.date).getHours())+":"+(new Date(data.date).getMinutes() < 10 ? '0'+new Date(data.date).getMinutes() : new Date(data.date).getMinutes())+"</span><br>";
                                $('#cmLivechat_chat').append('<span style="color:'+templateOptions.livechat.crfcColor+';background-color:'+templateOptions.livechat.crbgColor+';font-size: 0.8em;padding:5px;margin:5px;border-radius:5px;display:inline-block;float:left;position:relative;margin-right:30px; word-break: break-word;">'+formattedDate+data.text+'</span><br style="clear:both;">');
                                var elem = document.getElementById('cmLivechat_chat');
                                elem.scrollTop = elem.scrollHeight;

                                window.cmLivechatIsOpen = true;
                                if(window.cmLivechatIsOpen)
                                {
                                    $('#cmLivechat_iconClosed').css('display','initial');
                                    $('#cmLivechat_iconOpen').css('display','none');
                                    $('#cmLivechat_container').css('display','initial');
                                }
                                if(window.cmLivechat_soundWorks)
                                    playAudio();

                            });

                            $.post(window.cmLivechat_siteUrl+'/livechat/api/create',dataToSend, function( data ) {
                                console.log("POSTED");

                                $('#cmLivechat_icDropper').empty();
                                $('#cmLivechat_icDropper').append('<textarea rows="5" id="cmLivechat_chatMessage" type="text" style="'+cssFormControl+' margin-top:5px;margin-bottom:5px;color:' + templateOptions.livechat.fcColor + ';width:97% !important;position:absolute;bottom:22px;resize: none;margin-left:0px;height:90px;z-index:30000;" ></textarea>');
                                $('#cmLivechat_icDropper').append('<button id="cmLivechat_sendChatMessage" type="button" style="'+cssBtn+' margin-top:5px;margin-bottom:5px;color:' + templateOptions.livechat.fcColor + ';width:auto;height:34px;padding:0;background-color:transparent;position:absolute;bottom:0px;margin:0;right:0px;font-size:23px;text-transform:none;"><i class="'+(settingsOptions.v4FontAwesome ? "fa fa-paper-plane" : "fab  fa-telegram-plane")+'"></i></button>');
                                $('#cmLivechat_icDropper').append("<div id='cmLivechat_chat' style='background-color: " + templateOptions.livechat.fgColor + ";width:300px;height:280px;overflow:auto;padding-left:5px;padding-right:5px;position:relative;'></div>");
                                var input = document.getElementById("cmLivechat_chatMessage");

// Execute a function when the user releases a key on the keyboard
                                input.addEventListener("keyup", function(event) {
                                    // Number 13 is the "Enter" key on the keyboard
                                    if (event.key === "Enter") {
                                        if(event.shiftKey)
                                        {
                                            //$('#cmLivechat_chatMessage').val($('#cmLivechat_chatMessage').val()+"\n");
                                        }
                                        else
                                        {
                                            // Cancel the default action, if needed
                                            event.preventDefault();
                                            // Trigger the button element with a click
                                            document.getElementById("cmLivechat_sendChatMessage").click();
                                        }
                                    }

                                });
                                /*$('#cmLivechat_chatMessage').on('keyup',function(e){
                                var maxHeight = 94;
                                document.getElementById('cmLivechat_chatMessage').style.height = 'auto';
                                var f = document.getElementById('cmLivechat_chatMessage');
                                if (f.clientHeight < f.scrollHeight && f.scrollHeight < maxHeight )
                                    { f.style.height = f.scrollHeight + 'px'; }
                                });      */
                                $('#cmLivechat_sendChatMessage').click(function()
                                {
                                    var formattedDate = '<span style="font-size:0.6em;">'+(new Date().getHours() < 10 ? '0'+new Date().getHours() : new Date().getHours())+":"+(new Date().getMinutes() < 10 ? '0'+new Date().getMinutes() : new Date().getMinutes())+"</span><br>";
                                    //document.getElementById('cmLivechat_chatMessage').style.height = '20px';
                                    //document.getElementById('cmLivechat_chatMessage').style.height = 'auto';

                                    if($('#cmLivechat_chatMessage').val().trim() == "") return;
                                    $('#cmLivechat_chat').append('<span style="color:'+templateOptions.livechat.csfcColor+';background-color: '+templateOptions.livechat.csbgColor+';font-size: 0.8em;padding:5px;margin:5px;border-radius:5px;display:inline-block;float:right;position:relative;margin-left:30px; word-break: break-word;">'+formattedDate+$('#cmLivechat_chatMessage').val().replace(/(?:\r\n|\r|\n)/g, '<br>')+'</span><br style="clear:both;">');

                                    var dataToSend = {};
                                    var ts = Math.round((new Date()).getTime() / 1000).toString()+
                                        Math.floor(Math.random() * 101).toString();
                                    dataToSend.appid = window.cmLivechat_appid;
                                    dataToSend.chatID = ts;
                                    dataToSend.type = "INCOMING";
                                    dataToSend.status = "UNREPLIED";
                                    dataToSend.isReplied = false;
                                    dataToSend.isAutoreply = false;
                                    dataToSend.inReplyTo = null;
                                    dataToSend.repliedAt = null;
                                    dataToSend.isFirst = false;
                                    dataToSend.body = $('#cmLivechat_chatMessage').val().replace(/(?:\r\n|\r|\n)/g, '<br>');
                                    dataToSend.initialData = [];
                                    dataToSend.from = "";
                                    dataToSend.initialChatID = getCookie('cmLivechat_chatID');

                                    $('#cmLivechat_chatMessage').val("");
                                    var elem = document.getElementById('cmLivechat_chat');
                                    elem.scrollTop = elem.scrollHeight;

                                    $.post(window.cmLivechat_siteUrl+'/livechat/api/create',dataToSend, function( data ) {
                                        //  console.log("POSTED");
                                        //document.getElementById('cmLivechat_chatMessage').style.height = '20px';


                                    });


                                });

                            });


                        });
                        break;
                }
            }

            var currentGroup = groups[0];

            var isDayOff = false;
            var isWorkTime = false;
            if(currentGroup.livechatGroupDayTimeSettings)
            {
                var currentDate = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate());
                var currentTime = currentDate.getHours()+':'+currentDate.getMinutes();

                var daysOff = [];
                //Days off check
                for(var  i = 0; i < JSON.parse(currentGroup.conditionDayOff).length;i++)
                {
                    daysOff.push([new Date(JSON.parse(currentGroup.conditionDayOff)[i].startDate),new Date(JSON.parse(currentGroup.conditionDayOff)[i].endDate)]);
                }

                for(var j = 0;j < daysOff.length;j++)
                {
                    if(daysOff[j][0].getTime()  <= currentDate.getTime() && daysOff[j][1].getTime() >= currentDate.getTime())
                        isDayOff = true;
                }

                currentDate = new Date();
                currentTime = currentDate.getHours()*60+currentDate.getMinutes();
                console.log(isDayOff);
                if(!isDayOff)
                {
                    var workHours = [];
                    var wH = JSON.parse(currentGroup.conditionWorkhour);

                    var currentDay = currentDate.getDay();

                    for(var k = 0;k < wH.length;k++)
                    {
                        var startDay = -1;
                        var endDay = -1;
                        var startHour = -1;
                        var endHour = -1;
                        var currentHour = -1;

                        switch(wH[k].startday)
                        {
                            case 'Su':
                                startDay = 0;
                                break;
                            case 'Mo':
                                startDay = 1;
                                break;
                            case 'Tu':
                                startDay = 2;
                                break;
                            case 'We':
                                startDay = 3;
                                break;
                            case 'Th':
                                startDay = 4;
                                break;
                            case 'Fr':
                                startDay = 5;
                                break;
                            case 'Sa':
                                startDay = 6;
                                break;

                        }
                        switch(wH[k].endday)
                        {
                            case 'Su':
                                endDay = 0;
                                break;
                            case 'Mo':
                                endDay = 1;
                                break;
                            case 'Tu':
                                endDay = 2;
                                break;
                            case 'We':
                                endDay = 3;
                                break;
                            case 'Th':
                                endDay = 4;
                                break;
                            case 'Fr':
                                endDay = 5;
                                break;
                            case 'Sa':
                                endDay = 6;
                                break;

                        }
                        startHour = Number(wH[k].starttime.split(':')[0])*60+Number(wH[k].starttime.split(':')[1]);
                        endHour = Number(wH[k].endtime.split(':')[0]*60)+Number(wH[k].endtime.split(':')[1]);
                        currentHour = currentTime;

                        console.log("Client:");
                        console.log(currentDay);
                        console.log(currentHour);
                        console.log("System:");
                        console.log(startDay);
                        console.log(startHour);
                        console.log(endDay);
                        console.log(endHour);

                        if( (currentDay >= startDay && currentDay <= endDay) && (currentHour >= startHour && currentHour <= endHour))
                            isWorkTime = true;


                    }
                    console.log(isWorkTime);
                    if(isWorkTime)
                        isDayOff = false;
                    else
                        isDayOff = true;


                    if(isDayOff)
                    {
                        $('#cmLivechat_icDropper').css('display','none');
                        $('#cmLivechat_icDropperNWH').css('display','block');
                    }
                    else
                    {
                        $('#cmLivechat_icDropper').css('display','block');
                        $('#cmLivechat_icDropperNWH').css('display','none');
                        if(templateOptions.livechat.initialGreetingRepeating)
                        {
                            setInterval(function()
                            {
                                doGreetings();
                            },templateOptions.livechat.initialGreetingTimer * 1000);
                        }
                        else
                        {
                            setTimeout(function()
                            {
                                doGreetings();
                            },templateOptions.livechat.initialGreetingTimer * 1000);
                        }
                    }

                }
            }
            else
            {
                for(var zx = 0;zx < groups.length;zx++)
                {
                    if(groups[zx].isDefault == true)
                        currentGroup = groups[zx];
                }
                var currentDate = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate());
                var currentTime = currentDate.getHours()+':'+currentDate.getMinutes();

                var daysOff = [];
                //Days off check
                for(var  i = 0; i < JSON.parse(currentGroup.conditionDayOff).length;i++)
                {
                    daysOff.push([new Date(JSON.parse(currentGroup.conditionDayOff)[i].startDate),new Date(JSON.parse(currentGroup.conditionDayOff)[i].endDate)]);
                }

                for(var j = 0;j < daysOff.length;j++)
                {
                    if(daysOff[j][0].getTime()  <= currentDate.getTime() && daysOff[j][1].getTime() >= currentDate.getTime())
                        isDayOff = true;
                }

                currentDate = new Date();
                currentTime = currentDate.getHours()*60+currentDate.getMinutes();
                console.log(isDayOff);
                if(!isDayOff)
                {
                    var workHours = [];
                    var wH = JSON.parse(currentGroup.conditionWorkhour);

                    var currentDay = currentDate.getDay();

                    for(var k = 0;k < wH.length;k++)
                    {
                        var startDay = -1;
                        var endDay = -1;
                        var startHour = -1;
                        var endHour = -1;
                        var currentHour = -1;

                        switch(wH[k].startday)
                        {
                            case 'Su':
                                startDay = 0;
                                break;
                            case 'Mo':
                                startDay = 1;
                                break;
                            case 'Tu':
                                startDay = 2;
                                break;
                            case 'We':
                                startDay = 3;
                                break;
                            case 'Th':
                                startDay = 4;
                                break;
                            case 'Fr':
                                startDay = 5;
                                break;
                            case 'Sa':
                                startDay = 6;
                                break;

                        }
                        switch(wH[k].endday)
                        {
                            case 'Su':
                                endDay = 0;
                                break;
                            case 'Mo':
                                endDay = 1;
                                break;
                            case 'Tu':
                                endDay = 2;
                                break;
                            case 'We':
                                endDay = 3;
                                break;
                            case 'Th':
                                endDay = 4;
                                break;
                            case 'Fr':
                                endDay = 5;
                                break;
                            case 'Sa':
                                endDay = 6;
                                break;

                        }
                        startHour = Number(wH[k].starttime.split(':')[0])*60+Number(wH[k].starttime.split(':')[1]);
                        endHour = Number(wH[k].endtime.split(':')[0]*60)+Number(wH[k].endtime.split(':')[1]);
                        currentHour = currentTime;

                        console.log("Client:");
                        console.log(currentDay);
                        console.log(currentHour);
                        console.log("System:");
                        console.log(startDay);
                        console.log(startHour);
                        console.log(endDay);
                        console.log(endHour);

                        if( (currentDay >= startDay && currentDay <= endDay) && (currentHour >= startHour && currentHour <= endHour))
                            isWorkTime = true;


                    }
                    console.log(isWorkTime);
                    if(isWorkTime)
                        isDayOff = false;
                    else
                        isDayOff = true;


                    if(isDayOff)
                    {
                        $('#cmLivechat_icDropper').css('display','none');
                        $('#cmLivechat_icDropperNWH').css('display','block');
                    }
                    else
                    {
                        $('#cmLivechat_icDropper').css('display','block');
                        $('#cmLivechat_icDropperNWH').css('display','none');
                        if(templateOptions.livechat.initialGreetingRepeating)
                        {
                            setInterval(function()
                            {
                                doGreetings();
                            },templateOptions.livechat.initialGreetingTimer * 1000);
                        }
                        else
                        {
                            setTimeout(function()
                            {
                                doGreetings();
                            },templateOptions.livechat.initialGreetingTimer * 1000);
                        }
                    }

                }
            }


            $('[data-type="group_dd"]').on('change', function() {
                var currentGroup = null;


                var selectedGroup = $(this).val();

                $('[data-type="group_dd"]').val(selectedGroup);

                for(var zy = 0;zy < groups.length;zy++)
                {
                    if(groups[zy]._id.toString() == selectedGroup.toString())
                        currentGroup = groups[zy];
                }

                var isDayOff = false;
                var isWorkTime = false;
                if(currentGroup.livechatGroupDayTimeSettings)
                {
                    var currentDate = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate());
                    var currentTime = currentDate.getHours()+':'+currentDate.getMinutes();

                    var daysOff = [];
                    //Days off check
                    for(var  i = 0; i < JSON.parse(currentGroup.conditionDayOff).length;i++)
                    {
                        daysOff.push([new Date(JSON.parse(currentGroup.conditionDayOff)[i].startDate),new Date(JSON.parse(currentGroup.conditionDayOff)[i].endDate)]);
                    }

                    for(var j = 0;j < daysOff.length;j++)
                    {
                        if(daysOff[j][0].getTime()  <= currentDate.getTime() && daysOff[j][1].getTime() >= currentDate.getTime())
                            isDayOff = true;
                    }

                    currentDate = new Date();
                    currentTime = currentDate.getHours()*60+currentDate.getMinutes();
                    console.log(isDayOff);
                    if(!isDayOff)
                    {
                        var workHours = [];
                        var wH = JSON.parse(currentGroup.conditionWorkhour);

                        var currentDay = currentDate.getDay();

                        for(var k = 0;k < wH.length;k++)
                        {
                            var startDay = -1;
                            var endDay = -1;
                            var startHour = -1;
                            var endHour = -1;
                            var currentHour = -1;

                            switch(wH[k].startday)
                            {
                                case 'Su':
                                    startDay = 0;
                                    break;
                                case 'Mo':
                                    startDay = 1;
                                    break;
                                case 'Tu':
                                    startDay = 2;
                                    break;
                                case 'We':
                                    startDay = 3;
                                    break;
                                case 'Th':
                                    startDay = 4;
                                    break;
                                case 'Fr':
                                    startDay = 5;
                                    break;
                                case 'Sa':
                                    startDay = 6;
                                    break;

                            }
                            switch(wH[k].endday)
                            {
                                case 'Su':
                                    endDay = 0;
                                    break;
                                case 'Mo':
                                    endDay = 1;
                                    break;
                                case 'Tu':
                                    endDay = 2;
                                    break;
                                case 'We':
                                    endDay = 3;
                                    break;
                                case 'Th':
                                    endDay = 4;
                                    break;
                                case 'Fr':
                                    endDay = 5;
                                    break;
                                case 'Sa':
                                    endDay = 6;
                                    break;

                            }
                            startHour = Number(wH[k].starttime.split(':')[0])*60+Number(wH[k].starttime.split(':')[1]);
                            endHour = Number(wH[k].endtime.split(':')[0]*60)+Number(wH[k].endtime.split(':')[1]);
                            currentHour = currentTime;

                            console.log("Client:");
                            console.log(currentDay);
                            console.log(currentHour);
                            console.log("System:");
                            console.log(startDay);
                            console.log(startHour);
                            console.log(endDay);
                            console.log(endHour);

                            if( (currentDay >= startDay && currentDay <= endDay) && (currentHour >= startHour && currentHour <= endHour))
                                isWorkTime = true;


                        }
                        console.log(isWorkTime);
                        if(isWorkTime)
                            isDayOff = false;
                        else
                            isDayOff = true;


                        if(isDayOff)
                        {
                            $('#cmLivechat_icDropper').css('display','none');
                            $('#cmLivechat_icDropperNWH').css('display','block');
                        }
                        else
                        {
                            $('#cmLivechat_icDropper').css('display','block');
                            $('#cmLivechat_icDropperNWH').css('display','none');
                            if(templateOptions.livechat.initialGreetingRepeating)
                            {
                                setInterval(function()
                                {
                                    doGreetings();
                                },templateOptions.livechat.initialGreetingTimer * 1000);
                            }
                            else
                            {
                                setTimeout(function()
                                {
                                    doGreetings();
                                },templateOptions.livechat.initialGreetingTimer * 1000);
                            }
                        }

                    }
                }
                else
                {
                    for(var zx = 0;zx < groups.length;zx++)
                    {
                        if(groups[zx].isDefault == true)
                            currentGroup = groups[zx];
                    }
                    var currentDate = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate());
                    var currentTime = currentDate.getHours()+':'+currentDate.getMinutes();

                    var daysOff = [];
                    //Days off check
                    for(var  i = 0; i < JSON.parse(currentGroup.conditionDayOff).length;i++)
                    {
                        daysOff.push([new Date(JSON.parse(currentGroup.conditionDayOff)[i].startDate),new Date(JSON.parse(currentGroup.conditionDayOff)[i].endDate)]);
                    }

                    for(var j = 0;j < daysOff.length;j++)
                    {
                        if(daysOff[j][0].getTime()  <= currentDate.getTime() && daysOff[j][1].getTime() >= currentDate.getTime())
                            isDayOff = true;
                    }

                    currentDate = new Date();
                    currentTime = currentDate.getHours()*60+currentDate.getMinutes();
                    console.log(isDayOff);
                    if(!isDayOff)
                    {
                        var workHours = [];
                        var wH = JSON.parse(currentGroup.conditionWorkhour);

                        var currentDay = currentDate.getDay();

                        for(var k = 0;k < wH.length;k++)
                        {
                            var startDay = -1;
                            var endDay = -1;
                            var startHour = -1;
                            var endHour = -1;
                            var currentHour = -1;

                            switch(wH[k].startday)
                            {
                                case 'Su':
                                    startDay = 0;
                                    break;
                                case 'Mo':
                                    startDay = 1;
                                    break;
                                case 'Tu':
                                    startDay = 2;
                                    break;
                                case 'We':
                                    startDay = 3;
                                    break;
                                case 'Th':
                                    startDay = 4;
                                    break;
                                case 'Fr':
                                    startDay = 5;
                                    break;
                                case 'Sa':
                                    startDay = 6;
                                    break;

                            }
                            switch(wH[k].endday)
                            {
                                case 'Su':
                                    endDay = 0;
                                    break;
                                case 'Mo':
                                    endDay = 1;
                                    break;
                                case 'Tu':
                                    endDay = 2;
                                    break;
                                case 'We':
                                    endDay = 3;
                                    break;
                                case 'Th':
                                    endDay = 4;
                                    break;
                                case 'Fr':
                                    endDay = 5;
                                    break;
                                case 'Sa':
                                    endDay = 6;
                                    break;

                            }
                            startHour = Number(wH[k].starttime.split(':')[0])*60+Number(wH[k].starttime.split(':')[1]);
                            endHour = Number(wH[k].endtime.split(':')[0]*60)+Number(wH[k].endtime.split(':')[1]);
                            currentHour = currentTime;

                            console.log("Client:");
                            console.log(currentDay);
                            console.log(currentHour);
                            console.log("System:");
                            console.log(startDay);
                            console.log(startHour);
                            console.log(endDay);
                            console.log(endHour);

                            if( (currentDay >= startDay && currentDay <= endDay) && (currentHour >= startHour && currentHour <= endHour))
                                isWorkTime = true;


                        }
                        console.log(isWorkTime);
                        if(isWorkTime)
                            isDayOff = false;
                        else
                            isDayOff = true;


                        if(isDayOff)
                        {
                            $('#cmLivechat_icDropper').css('display','none');
                            $('#cmLivechat_icDropperNWH').css('display','block');
                        }
                        else
                        {
                            $('#cmLivechat_icDropper').css('display','block');
                            $('#cmLivechat_icDropperNWH').css('display','none');
                            if(templateOptions.livechat.initialGreetingRepeating)
                            {
                                setInterval(function()
                                {
                                    doGreetings();
                                },templateOptions.livechat.initialGreetingTimer * 1000);
                            }
                            else
                            {
                                setTimeout(function()
                                {
                                    doGreetings();
                                },templateOptions.livechat.initialGreetingTimer * 1000);
                            }
                        }

                    }
                }

            });

            $('#cmLivechat_windowMinimize').click(function()
            {
                $('#cmLivechat_iconClosed').css('display','none');
                $('#cmLivechat_iconOpen').css('display','initial');
                $('#cmLivechat_container').css('display','none');
                window.cmLivechatIsOpen = false;
            });

            $('#cmLivechat_windowClose').click(function()
            {
                window.cmLivechatIsOpen = false;

                $('#cmLivechat_iconClosed').css('display','none');
                $('#cmLivechat_iconOpen').css('display','initial');
                $('#cmLivechat_container').css('display','none');
                $('#cmLivechat_igDropper').css('display','none');
                if($('#cmLivechat_icDropperNWH').css('display') == 'none')
                {
                    $('#cmLivechat_icDropper').css('display','block');
                    $('#cmLivechat_icDropperNWH').css('display','none');
                }

                $('#cmLivechat_container').css('bottom','27%');
                $('#cmLivechat_container').css('height','405px');


            });
            $('#cmLivechat_soundOn').click(function()
            {
                window.cmLivechat_soundWorks = false;
                $('#cmLivechat_soundOn').css('display','none');
                $('#cmLivechat_soundOff').css('display','initial');
            });

            $('#cmLivechat_soundOff').click(function()
            {
                window.cmLivechat_soundWorks = true;
                $('#cmLivechat_soundOn').css('display','initial');
                $('#cmLivechat_soundOff').css('display','none');
            });

        };

        function css(element, property) {
            return window.getComputedStyle(element, null).getPropertyValue(property);
        }





    }( jQuery ));

    $(document).cmLivechat();
},2000);
