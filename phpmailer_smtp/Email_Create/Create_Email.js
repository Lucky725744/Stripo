$(document).ready(function() {
setTimeout(hide, 7000);
});

function hide(){
  $('.esdev-app .sripo-watermark').addClass('hidden');
  $('.alert.alert-info').addClass('hidden');
  
};
    // Utility methods
    function request(method, url, data, callback) {
      var req = new XMLHttpRequest();
      req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
          callback(req.responseText);
        } else if (req.readyState === 4 && req.status !== 200) {
          console.error('Can not complete request. Please check you entered a valid PLUGIN_ID and SECRET_KEY values');
        }
      };
      req.open(method, url, true);
      if (method !== 'GET') {
        req.setRequestHeader('content-type', 'application/json');
      }
      req.send(data);
    }
    var rawhtml='<!doctypehtml><html dir=ltr xmlns=http://www.w3.org/1999/xhtml xmlns:o=urn:schemas-microsoft-com:office:office><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><meta name=x-apple-disable-message-reformatting><meta content="IE=edge"http-equiv=X-UA-Compatible><meta content="telephone=no"name=format-detection><title></title><link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i"rel=stylesheet><div class=es-wrapper-color dir=ltr><table cellpadding=0 cellspacing=0 width=100% class=es-wrapper><tr><td class=esd-email-paddings valign=top><table cellpadding=0 cellspacing=0 class="es-header esd-footer-popover"align=center><tr><td class=esd-stripe align=center><table cellpadding=0 cellspacing=0 width=600 class=es-header-body align=center bgcolor="rgba(0, 0, 0, 0)"><tr><td class="es-p20l es-p20r es-p20t esd-structure"align=left><table cellpadding=0 cellspacing=0 width=100%><tr><td class=esd-container-frame align=center valign=top width=560><table cellpadding=0 cellspacing=0 width=100%><tr><td class=esd-empty-container align=center style=display:none></table></table></table></table></table></div>';
    var rawcss=".es-button-border:hover,.es-button-border:hover a.es-button,.es-button-border:hover button.es-button{background:#0b317e!important}.es-menu td,img{border:0}.es-menu td a,img{display:block}.es-header,.es-wrapper{background-position:center top;background-repeat:repeat}.es-footer,.es-header,.es-wrapper{background-repeat:repeat}h1,h2{font-style:normal;font-weight:700}.rollover:hover .rollover-first{max-height:0!important;display:none!important}.rollover:hover .rollover-second{max-height:none!important;display:block!important}#outlook a,.es-p-all-default{padding:0}.es-button{mso-style-priority:100!important;text-decoration:none!important}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important}.es-menu td a,img{text-decoration:none}.es-menu td a,a.es-button,body,button.es-button,h1,h2,h3,h4,h5,ol li,p,ul li{font-family:roboto,'helvetica neue',helvetica,arial,sans-serif}.es-desk-hidden{display:none;float:left;overflow:hidden;width:0;max-height:0;line-height:0;mso-hide:all}.es-button-border:hover{border-style:solid!important;border-color:#42d159!important}body{width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table{mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px}.es-wrapper,body,table td{padding:0;Margin:0}.es-content,.es-footer,.es-header{table-layout:fixed!important;width:100%}img{outline:0;-ms-interpolation-mode:bicubic}hr,p{Margin:0}h1,h2,h3,h4,h5{Margin:0;line-height:120%;mso-line-height-rule:exactly}a,ol li,p,ul li{-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly}.es-left{float:left}.es-right{float:right}.es-p5{padding:5px}.es-p5t{padding-top:5px}.es-p5b{padding-bottom:5px}.es-p5l{padding-left:5px}.es-p5r{padding-right:5px}.es-p10{padding:10px}.es-p10t{padding-top:10px}.es-p10b{padding-bottom:10px}.es-p10l{padding-left:10px}.es-p10r{padding-right:10px}.es-p15{padding:15px}.es-p15t{padding-top:15px}.es-p15b{padding-bottom:15px}.es-p15l{padding-left:15px}.es-p15r{padding-right:15px}.es-p20{padding:20px}.es-p20t{padding-top:20px}.es-p20b{padding-bottom:20px}.es-p20l{padding-left:20px}.es-p20r{padding-right:20px}.es-p25{padding:25px}.es-p25t{padding-top:25px}.es-p25b{padding-bottom:25px}.es-p25l{padding-left:25px}.es-p25r{padding-right:25px}.es-p30{padding:30px}.es-p30t{padding-top:30px}.es-p30b{padding-bottom:30px}.es-p30l{padding-left:30px}.es-p30r{padding-right:30px}.es-p35{padding:35px}.es-p35t{padding-top:35px}.es-p35b{padding-bottom:35px}.es-p35l{padding-left:35px}.es-p35r{padding-right:35px}.es-p40{padding:40px}.es-p40t{padding-top:40px}.es-p40b{padding-bottom:40px}.es-p40l{padding-left:40px}.es-p40r{padding-right:40px}.es-menu td a img{display:inline!important}s{text-decoration:line-through}ol li,p,ul li{line-height:150%}ol li,ul li{Margin-bottom:15px;margin-left:0}a{text-decoration:underline}.es-wrapper{width:100%;height:100%}.es-wrapper,.es-wrapper-color{background-color:#f8f9fd}.es-content-body,.es-footer-body,.es-header,.es-header-body{background-color:transparent}.es-header-body ol li,.es-header-body p,.es-header-body ul li{color:#333;font-size:14px}.es-header-body a{color:#1376c8;font-size:14px}.es-content-body ol li,.es-content-body p,.es-content-body ul li{color:#131313;font-size:16px}.es-content-body a{color:#2cb543;font-size:16px}h1,h2,h3{color:#212121}.es-footer{background-color:#0a2b6e;background-image:url('https://hpy.stripocdn.email/content/guids/CABINET_9bfedeeeb9eeabe76f8ff794c5e228f9/images/2191625641866113.png');background-position:center center}.es-button-border,a.es-button,button.es-button{background:#071f4f;width:auto;display:inline-block}.es-footer-body ol li,.es-footer-body p,.es-footer-body ul li{color:#212121;font-size:16px}.es-footer-body a{color:#fff;font-size:16px}.es-infoblock,.es-infoblock ol li,.es-infoblock p,.es-infoblock ul li{line-height:120%;font-size:12px;color:#fff}.es-content-body h1 a,.es-footer-body h1 a,.es-header-body h1 a,h1{font-size:30px}.es-infoblock a{font-size:12px;color:#fff}h2{font-size:24px}a.es-button,button.es-button,h3{font-weight:400;font-style:normal}h3{font-size:20px}.es-content-body h2 a,.es-footer-body h2 a,.es-header-body h2 a{font-size:24px}.es-content-body h3 a,.es-footer-body h3 a,.es-header-body h3 a{font-size:20px}a.es-button,button.es-button{padding:10px 20px;border-radius:5px;font-size:16px;line-height:120%;color:#fff;text-decoration:none;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid #071f4f}.es-button-border{border:0 solid #2cb543;border-radius:5px}.es-button img{display:inline-block;vertical-align:middle}@media only screen and (max-width:600px){h1,h1 a,h2,h2 a,h3,h3 a{text-align:center}.es-content-body h1 a,.es-footer-body h1 a,.es-header-body h1 a,h1{font-size:30px!important}.adapt-img,.es-adapt-td,.es-adaptive table,.es-left,.es-right{width:100%!important}a,ol li,p,ul li{line-height:150%!important}h1,h1 a,h2,h2 a,h3,h3 a{line-height:120%!important}h2{font-size:26px!important}h3{font-size:20px!important}.st-br{padding-left:10px!important;padding-right:10px!important}.es-content-body h2 a,.es-footer-body h2 a,.es-header-body h2 a{font-size:26px!important}.es-content-body h3 a,.es-footer-body h3 a,.es-header-body h3 a{font-size:20px!important}.es-footer-body a,.es-footer-body ol li,.es-footer-body p,.es-footer-body ul li,.es-menu td a{font-size:14px!important}.es-content-body a,.es-content-body ol li,.es-content-body p,.es-content-body ul li,.es-header-body a,.es-header-body ol li,.es-header-body p,.es-header-body ul li{font-size:16px!important}.es-infoblock a,.es-infoblock ol li,.es-infoblock p,.es-infoblock ul li{font-size:12px!important}.es-hidden,.es-mobile-hidden,[class=gmail-fix]{display:none!important}.es-m-txt-c,.es-m-txt-c h1,.es-m-txt-c h2,.es-m-txt-c h3{text-align:center!important}.es-m-txt-r,.es-m-txt-r h1,.es-m-txt-r h2,.es-m-txt-r h3{text-align:right!important}.es-m-txt-l,.es-m-txt-l h1,.es-m-txt-l h2,.es-m-txt-l h3{text-align:left!important}.es-m-txt-c img,.es-m-txt-l img,.es-m-txt-r img{display:inline!important}.es-adapt-td,.es-button-border{display:block!important}a.es-button,button.es-button{font-size:16px!important;display:block!important;border-left-width:0!important;border-right-width:0!important}.es-content,.es-content table,.es-footer,.es-footer table,.es-header,.es-header table{width:100%!important;max-width:600px!important}.es-desk-hidden,tr.es-desk-hidden{display:table-row!important}.adapt-img{height:auto!important}.es-desk-hidden,.esd-block-html table,table.es-table-not-adapt{width:auto!important}.es-m-p0{padding:0!important}.es-m-p0r{padding-right:0!important}.es-m-p0l{padding-left:0!important}.es-m-p0t{padding-top:0!important}.es-m-p0b{padding-bottom:0!important}.es-m-p20b{padding-bottom:20px!important}table.es-desk-hidden,td.es-desk-hidden,tr.es-desk-hidden{width:auto!important;overflow:visible!important;float:none!important;max-height:inherit!important;line-height:inherit!important}table.es-desk-hidden{display:table!important}td.es-desk-menu-hidden{display:table-cell!important}table.es-social,table.es-social td{display:inline-block!important}.es-m-p5{padding:5px!important}.es-m-p5t{padding-top:5px!important}.es-m-p5b{padding-bottom:5px!important}.es-m-p5r{padding-right:5px!important}.es-m-p5l{padding-left:5px!important}.es-m-p10{padding:10px!important}.es-m-p10t{padding-top:10px!important}.es-m-p10b{padding-bottom:10px!important}.es-m-p10r{padding-right:10px!important}.es-m-p10l{padding-left:10px!important}.es-m-p15{padding:15px!important}.es-m-p15t{padding-top:15px!important}.es-m-p15b{padding-bottom:15px!important}.es-m-p15r{padding-right:15px!important}.es-m-p15l{padding-left:15px!important}.es-m-p20{padding:20px!important}.es-m-p20t{padding-top:20px!important}.es-m-p20r{padding-right:20px!important}.es-m-p20l{padding-left:20px!important}.es-m-p25{padding:25px!important}.es-m-p25t{padding-top:25px!important}.es-m-p25b{padding-bottom:25px!important}.es-m-p25r{padding-right:25px!important}.es-m-p25l{padding-left:25px!important}.es-m-p30{padding:30px!important}.es-m-p30t{padding-top:30px!important}.es-m-p30b{padding-bottom:30px!important}.es-m-p30r{padding-right:30px!important}.es-m-p30l{padding-left:30px!important}.es-m-p35{padding:35px!important}.es-m-p35t{padding-top:35px!important}.es-m-p35b{padding-bottom:35px!important}.es-m-p35r{padding-right:35px!important}.es-m-p35l{padding-left:35px!important}.es-m-p40{padding:40px!important}.es-m-p40t{padding-top:40px!important}.es-m-p40b{padding-bottom:40px!important}.es-m-p40r{padding-right:40px!important}.es-m-p40l{padding-left:40px!important}.es-desk-hidden{overflow:visible!important;max-height:inherit!important}}.es-p-default{padding:20px 20px 0}";
    function loadDemoTemplate(callback) {
       setTimeout(function() {
          callback({html: rawhtml, css: rawcss});
      }, 100);
    }
    function initPlugin(template) {
      const apiRequestData = {
        emailId: 123
      };
      const script = document.createElement('script');
      script.id = 'stripoScript';
      script.type = 'text/javascript';
      script.src = 'https://plugins.stripo.email/static/latest/stripo.js';
      script.onload = function () {
        window.Stripo.init({
          settingsId: 'stripoSettingsContainer',
          previewId: 'stripoPreviewContainer',
          codeEditorButtonId: 'codeEditor',
          undoButtonId: 'undoButton',
          redoButtonId: 'redoButton',
          locale: 'en',
          html: template.html,
          css: template.css,
          apiRequestData: apiRequestData,
          userFullName: 'Plugin Demo User',
          versionHistory: {
            changeHistoryLinkId: 'changeHistoryLink',
            onInitialized: function(lastChangeIndoText) {
              $('#changeHistoryContainer').show();
            }
          },
          getAuthToken: function (callback) {
            request('POST', 'https://plugins.stripo.email/api/v1/auth',
              JSON.stringify({
                pluginId: '8e465ac147f34ef6a4f0284f2533dec2',
                secretKey: '0faa036d8a674a2b99cd134d4e0dc2e2'
              }),
              function(data) {
                callback(JSON.parse(data).token);
              }
            );
          }
        });
      };
      document.body.appendChild(script);
    }

    loadDemoTemplate(initPlugin);
   
  function Preview() {
    window.StripoApi.compileEmail((error, html) => {
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.open();
            newWindow.document.write(html);
            newWindow.document.close();
        } else {
            alert('Popup blocker is enabled! Please allow popups for this website.');
        }
    });
}

  function Send() {
    window.StripoApi.getTemplate(function (html, css) {
        window.StripoApi.compileEmail((error, compiledHtml) => {
          console.log(compiledHtml);
            if (error) {
                alert('Failed to compile email: ' + error);
                return;
            }
            $.ajax({
              url: '/phpmailer_smtp/test.php',
                method: 'POST',
                data: {
                    templateHtml: html,
                    templateCss: css,
                    compiledHtml: compiledHtml
                },
                success: function(response) {
                    if (response === 'Sent') {
                        alert('Mail sent successfully!');
                    } else {
                        alert('Failed to send mail: ' + response);
                    }
                }
            });
        });
    });
}
// SAVE TO DATA BASE START
function SAVETODB() {
  window.StripoApi.getTemplate(function (html, css) {
      window.StripoApi.compileEmail((error, compiledHtml) => {
          $.ajax({
              url: 'Create_Email.php',
              method: 'POST',
              data: {
                  templateHtml: html,
                  templateCss: css,
                  compiledHtml: compiledHtml
              },
              success: function(response) {
                var result = JSON.parse(response);
                if (result.status === 'success')  {
                      alert(result.message);
                  } else {
                      alert('Failed to send mail: ' + result);
                  }
              }
          });
      });
  });
}
//SAVE TO DATA BASE END