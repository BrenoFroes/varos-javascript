$(document).ready(function () {
  //Ativar o plugin lazyload para imagens e AOS para animações
  $(function () {
    var imglazyload = jQuery(".lazyload");
    if (imglazyload.length > 0) {
      imglazyload.lazyload({ effect: "fadeIn" });
    }
    AOS.init();
  });

  // Cronometro de inscricao 
  var cronometro_inscricao = jQuery(".cronometro-inscricao");
  if (cronometro_inscricao.length > 0) {
    $('.clock-inscricao').countdown('2021/12/25 00:00:00').on('update.countdown', function (event) {
      var format = '<div class="area"><div class="hora"><div class="info-a">%H</div><div class="info-b">.</div></div><div class="info-c">HORAS</div></div><div class="area"><div class="hora"><div class="info-a">%M</div><div class="info-b">.</div></div><div class="info-c">MIN</div></div><div class="area"><div class="hora"><div class="info-a">%S</div><div class="info-b"><br /></div></div><div class="info-c">SEG</div></div';
      if (event.offset.totalDays > 0) {

        format = '<div class="area"><div class="hora"><div class="info-a">%D</div><div class="info-b">.</div></div><div class="info-c">DIAS</div></div>' + format;
      }
      $(this).html(event.strftime(format));
    })
      .on('finish.countdown', function (event) {
        $(".box-contador").css({ "display": "none" });
        $(this).html('<div class="area"><div class="info-a">0</div><div class="info-c">DIA</div></div><div class="area"><div class="info-a">0</div><div class="info-c">HORAS</div></div><div class="area"><div class="info-a">0</div><div class="info-c">MIN</div></div><div class="area"><div class="info-a">0</div><div class="info-c">SEG</div></div>')
          .parent().addClass('disabled');
      });
  }

  // executar a barra de % da Lp de inscrição 
  var barraprogress = jQuery(".barra-progress");
  if (barraprogress.length > 0) {
    //function para criar uma barra de porcentagem no modal do formulario
    var i = 0;
    function movebarraprogress() {
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar2");
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 50) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
          }
        }
      }
    }
    movebarraprogress();
  }

  // executar a barra de % ao clicar no botão
  var btn_modal = jQuery(".bottom-button");
  if (btn_modal.length > 0) {
    //function para criar uma barra de porcentagem no modal do formulario
    var i = 0;
    function move() {
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 50) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
          }
        }
      }
    }
    btn_modal.click(function () { move(); });
  }

  jQuery(window).scroll(function () {
    var parada = $("#footer").outerHeight(true);
    var barra_rodape = jQuery('#barra-rodape');
    //var barra_topo = jQuery('.barra');      
    //var topo = jQuery('.info');  


    var scrollButtom = $(document).height() - ($(window).scrollTop() + $(window).height());
    if (scrollButtom >= parada) {
      barra_rodape.css({ "bottom": "0", });
    }
    //scroll top/down with a footer
    if (scrollButtom < parada) {
      barra_rodape.css('bottom', (parada - scrollButtom) + 'px');
    }

    if (jQuery(this).scrollTop() > 400) {
      barra_rodape.addClass("mostrar-barra-rodape  slide-in-fwd-center");
    } else {
      barra_rodape.removeClass("mostrar-barra-rodape  slide-in-fwd-center ");
    }

    ///     if (jQuery(this).scrollTop() > 300) {
    // barra_topo.addClass("fixar slide-in-fwd-center");    
    //topo.addClass("ajuste-barra-topo");     
    //    } else {
    //  barra_topo.removeClass("fixar slide-in-fwd-center ");
    //topo.removeClass("ajuste-barra-topo");
    //    }
  });

  //Validador de e-mail - lista negra    
  var legalDomains = {
    "-18mail.com": true,
    "-1961gmai.com": true,
    "-501.gmail.com": true,
    "-66.com": true,
    "-a.com": true,
    "-ail.com": true,
    "-bol.br": true,
    "-ci.com": true,
    "-email.com": true,
    "-g.globo": true,
    "-gamail.com": true,
    "-gamail.con": true,
    "-gamal.com": true,
    "-gamil.com": true,
    "-gemail.com.br": true,
    "-gemeil.com": true,
    "-gmaik.com": true,
    "-gmail,com": true,
    "-gmail.ccom": true,
    "-gmail.cim": true,
    "-gmail.cm": true,
    "-gmail.co": true,
    "-gmail.coim": true,
    "-gmail.com.": true,
    "-gmail.com.br": true,
    "-gmail.com.br.com": true,
    "-gmail.comi": true,
    "-gmail.comm": true,
    "-gmail.comt": true,
    "-gmail.con": true,
    "-gmail.om": true,
    "-gmail.vom": true,
    "-gmail.xom": true,
    "-gmailco.com": true,
    "-gmal.com": true,
    "-gmeio.co.com": true,
    "-gmill.cim.br": true,
    "-gnail.com": true,
    "-godoutiluk.com": true,
    "-holmail.com": true,
    "-homail.com": true,
    "-hot.mail.com": true,
    "-hotamail.com": true,
    "-hotmai.com": true,
    "-hotmail.cim": true,
    "-hotmail.co": true,
    "-hotmail.com.br": true,
    "-hotmail.comt": true,
    "-hotmail.con": true,
    "-hotmail.cpm": true,
    "-hotmail.xom": true,
    "-hotmal.com": true,
    "-hotmeil.com": true,
    "-hotmsil.com": true,
    "-htmail.com.br": true,
    "-inviolqvel.comm.br": true,
    "-mail.com": true,
    "-norma.com": true,
    "-nuttialy.combr": true,
    "-outkok.com.br": true,
    "-Outlook.con": true,
    "-outlook.Conserteza": true,
    "-rotmail.com": true,
    "-uahoo.com.br": true,
    "-uol.com.br.com.br": true,
    "-yaho.com.br": true,
    "-yahoo.com.br.br": true,
    "-yahoo.comm": true,
    "-yaoo.com.br": true,
  };
  function validateEmailDomain(str) {
    var matches = str.match(/@(.*)$/);
    if (matches) {
      // matches[1] is the part after the @ sign in the email address
      if (("-" + matches[1]) in legalDomains) {
        // found the domain in the permitted list
        return (true);
      }
    }
    return (false);
  }
  $("#email").on('keyup change', function () {
    $("#valida").html(validateEmailDomain(this.value) ? '<span style="font-size: 10px; color: #900d0d;">E-Mail invalido!</span>' : ' ');
    validateEmailDomain(this.value) ? $("#_form_64_submit, #_form_78_submit, #_form_90_submit").css({ "cursor": "not-allowed", "opacity": "0.5" }) : $("#_form_64_submit, #_form_78_submit ,#_form_90_submit").css({ "cursor": "pointer", "opacity": "1" });
    validateEmailDomain(this.value) ? $("#_form_64_submit, #_form_78_submit, #_form_90_submit").prop('disabled', true) : $("#_form_64_submit, #_form_78_submit,#_form_90_submit ").prop('disabled', false);
  });

  //  formulario  Pre inscricao 
  var formulario_pre = jQuery("#_form_64_");
  if (formulario_pre.length > 0) {

    const DEFAULT_ADDRESS = 'parabens.html';
    const UTM_SOURCE = new URLSearchParams(window.location.search).get('utm_source');
    const UTM_CAMPAIGN = new URLSearchParams(window.location.search).get('utm_campaign');
    const UTM_MEDIUM = new URLSearchParams(window.location.search).get('utm_medium');
    const UTM_CONTENT = new URLSearchParams(window.location.search).get('utm_content');
    const UTM_TERM = new URLSearchParams(window.location.search).get('utm_term');
    const PMP = new URLSearchParams(window.location.search).get('pmp');
    const SCK_CAMPAIGN = new URLSearchParams(window.location.search).get('sck');
    const SRC_CAMPAIGN = new URLSearchParams(window.location.search).get('src');
    let __params = [];
    let urlhot = [];
    if (UTM_SOURCE) {
      __params.push(`utm_source=${UTM_SOURCE}`);
    };
    if (UTM_CAMPAIGN) {
      __params.push(`utm_campaign=${UTM_CAMPAIGN}`);
    };
    if (UTM_MEDIUM) {
      __params.push(`utm_medium=${UTM_MEDIUM}`);
    };
    if (UTM_CONTENT) {
      __params.push(`utm_content=${UTM_CONTENT}`);
    };
    if (UTM_TERM) {
      __params.push(`utm_term=${UTM_TERM}`);
    };
    if (PMP) {
      __params.push(`pmp=${PMP}`);
    };
    if (SCK_CAMPAIGN) {
      __params.push(`sck=${SCK_CAMPAIGN}`);
    };
    if (SRC_CAMPAIGN) {
      __params.push(`src=${SRC_CAMPAIGN}`);
    };
    if (__params.length > 0) {
      urlhot = `${DEFAULT_ADDRESS}?${__params.join('&')}`;
    } else {
      urlhot = DEFAULT_ADDRESS;
    };
    function abrirurl() {
      var linkurl = document.createElement('a');
      linkurl.href = urlhot;
      linkurl.target = "_parent";
      linkurl.click();
    };

    //form active 

    window.cfields = { "7": "utm", "15": "pmp" };

    window._show_thank_you = function (id, message, trackcmp_url, email) {

      abrirurl();

    };

    window._show_error = function (id, message, html) {

      var form = document.getElementById('_form_' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');

      if (old_error) old_error.parentNode.removeChild(old_error);

      err.innerHTML = message;

      err.className = '_error-inner _form_error _no_arrow';

      var wrapper = document.createElement('div');

      wrapper.className = '_form-inner';

      wrapper.appendChild(err);

      button.parentNode.insertBefore(wrapper, button);

      document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;

      if (html) {

        var div = document.createElement('div');

        div.className = '_error-html';

        div.innerHTML = html;

        err.appendChild(div);

      }

    };

    window._load_script = function (url, callback) {

      var head = document.querySelector('head'), script = document.createElement('script'), r = false;

      script.type = 'text/javascript';

      script.charset = 'utf-8';

      script.src = url;

      if (callback) {

        script.onload = script.onreadystatechange = function () {

          if (!r && (!this.readyState || this.readyState == 'complete')) {

            r = true;

            callback();

          }

        };

      }

      head.appendChild(script);

    };

    (function () {

      if (window.location.search.search("excludeform") !== -1) return false;

      var getCookie = function (name) {

        var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));

        return match ? match[2] : null;

      }

      var setCookie = function (name, value) {

        var now = new Date();

        var time = now.getTime();

        var expireTime = time + 1000 * 60 * 60 * 24 * 365;

        now.setTime(expireTime);

        document.cookie = name + '=' + value + '; expires=' + now + ';path=/';

      }

      var addEvent = function (element, event, func) {

        if (element.addEventListener) {

          element.addEventListener(event, func);

        } else {

          var oldFunc = element['on' + event];

          element['on' + event] = function () {

            oldFunc.apply(this, arguments);

            func.apply(this, arguments);

          };

        }

      }

      var _removed = false;

      var form_to_submit = document.getElementById('_form_64_');

      var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;



      var getUrlParam = function (name) {

        var regexStr = '[\?&]' + name + '=([^&#]*)';

        var results = new RegExp(regexStr, 'i').exec(window.location.href);

        return results != undefined ? decodeURIComponent(results[1]) : false;

      };



      for (var i = 0; i < allInputs.length; i++) {

        var regexStr = "field\\[(\\d+)\\]";

        var results = new RegExp(regexStr).exec(allInputs[i].name);

        if (results != undefined) {

          allInputs[i].dataset.name = window.cfields[results[1]];

        } else {

          allInputs[i].dataset.name = allInputs[i].name;

        }

        var fieldVal = getUrlParam(allInputs[i].dataset.name);



        if (fieldVal) {

          if (allInputs[i].dataset.autofill === "false") {

            continue;

          }

          if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {

            if (allInputs[i].value == fieldVal) {

              allInputs[i].checked = true;

            }

          } else {

            allInputs[i].value = fieldVal;

          }

        }

      }



      var remove_tooltips = function () {

        for (var i = 0; i < tooltips.length; i++) {

          tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);

        }

        tooltips = [];

      };

      var remove_tooltip = function (elem) {

        for (var i = 0; i < tooltips.length; i++) {

          if (tooltips[i].elem === elem) {

            tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);

            tooltips.splice(i, 1);

            return;

          }

        }

      };

      var create_tooltip = function (elem, text) {

        var tooltip = document.createElement('div'), arrow = document.createElement('div'), inner = document.createElement('div'), new_tooltip = {};

        if (elem.type != 'radio' && elem.type != 'checkbox') {

          tooltip.className = '_error';

          arrow.className = '_error-arrow';

          inner.className = '_error-inner';

          inner.innerHTML = text;

          tooltip.appendChild(arrow);

          tooltip.appendChild(inner);

          elem.parentNode.appendChild(tooltip);

        } else {

          tooltip.className = '_error-inner _no_arrow';

          tooltip.innerHTML = text;

          elem.parentNode.insertBefore(tooltip, elem);

          new_tooltip.no_arrow = true;

        }

        new_tooltip.tip = tooltip;

        new_tooltip.elem = elem;

        tooltips.push(new_tooltip);

        return new_tooltip;

      };

      var resize_tooltip = function (tooltip) {

        var rect = tooltip.elem.getBoundingClientRect();

        var doc = document.documentElement, scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0));

        if (scrollPosition < 40) {

          tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';

        } else {

          tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';

        }

      };

      var resize_tooltips = function () {

        if (_removed) return;

        for (var i = 0; i < tooltips.length; i++) {

          if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);

        }

      };

      var validate_field = function (elem, remove) {

        var tooltip = null, value = elem.value, no_error = true;

        remove ? remove_tooltip(elem) : false;

        if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');

        if (elem.getAttribute('required') !== null) {

          if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {

            var elems = form_to_submit.elements[elem.name];

            if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {

              no_error = elem.checked;

            }

            else {

              no_error = false;

              for (var i = 0; i < elems.length; i++) {

                if (elems[i].checked) no_error = true;

              }

            }

            if (!no_error) {

              tooltip = create_tooltip(elem, "Por favor, selecione uma opção.");

            }

          } else if (elem.type == 'checkbox') {

            var elems = form_to_submit.elements[elem.name], found = false, err = [];

            no_error = true;

            for (var i = 0; i < elems.length; i++) {

              if (elems[i].getAttribute('required') === null) continue;

              if (!found && elems[i] !== elem) return true;

              found = true;

              elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');

              if (!elems[i].checked) {

                no_error = false;

                elems[i].className = elems[i].className + ' _has_error';

                err.push("Marcar %s é necessário".replace("%s", elems[i].value));

              }

            }

            if (!no_error) {

              tooltip = create_tooltip(elem, err.join('<br/>'));

            }

          } else if (elem.tagName == 'SELECT') {

            var selected = true;

            if (elem.multiple) {

              selected = false;

              for (var i = 0; i < elem.options.length; i++) {

                if (elem.options[i].selected) {

                  selected = true;

                  break;

                }

              }

            } else {

              for (var i = 0; i < elem.options.length; i++) {

                if (elem.options[i].selected && !elem.options[i].value) {

                  selected = false;

                }

              }

            }

            if (!selected) {

              elem.className = elem.className + ' _has_error';

              no_error = false;

              tooltip = create_tooltip(elem, "Por favor, selecione uma opção.");

            }

          } else if (value === undefined || value === null || value === '') {

            elem.className = elem.className + ' _has_error';

            no_error = false;

            tooltip = create_tooltip(elem, "Este campo é necessário.");

          }

        }

        if (no_error && elem.name == 'email') {

          if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {

            elem.className = elem.className + ' _has_error';

            no_error = false;

            tooltip = create_tooltip(elem, "Digite um e-mail válido");

          }

        }

        if (no_error && /date_field/.test(elem.className)) {

          if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {

            elem.className = elem.className + ' _has_error';

            no_error = false;

            tooltip = create_tooltip(elem, "Digite uma data válida.");

          }

        }

        tooltip ? resize_tooltip(tooltip) : false;

        return no_error;

      };

      var needs_validate = function (el) {

        if (el.getAttribute('required') !== null) {

          return true

        }

        if (el.name === 'email' && el.value !== "") {

          return true

        }

        return false

      };

      var validate_form = function (e) {

        var err = form_to_submit.querySelector('._form_error'), no_error = true;

        if (!submitted) {

          submitted = true;

          for (var i = 0, len = allInputs.length; i < len; i++) {

            var input = allInputs[i];

            if (needs_validate(input)) {

              if (input.type == 'text') {

                addEvent(input, 'blur', function () {

                  this.value = this.value.trim();

                  validate_field(this, true);

                });

                addEvent(input, 'input', function () {

                  validate_field(this, true);

                });

              } else if (input.type == 'radio' || input.type == 'checkbox') {

                (function (el) {

                  var radios = form_to_submit.elements[el.name];

                  for (var i = 0; i < radios.length; i++) {

                    addEvent(radios[i], 'click', function () {

                      validate_field(el, true);

                    });

                  }

                })(input);

              } else if (input.tagName == 'SELECT') {

                addEvent(input, 'change', function () {

                  validate_field(this, true);

                });

              } else if (input.type == 'textarea') {

                addEvent(input, 'input', function () {

                  validate_field(this, true);

                });

              }

            }

          }

        }

        remove_tooltips();

        for (var i = 0, len = allInputs.length; i < len; i++) {

          var elem = allInputs[i];

          if (needs_validate(elem)) {

            if (elem.tagName.toLowerCase() !== "select") {

              elem.value = elem.value.trim();

            }

            validate_field(elem) ? true : no_error = false;

          }

        }

        if (!no_error && e) {

          e.preventDefault();

        }

        resize_tooltips();

        return no_error;

      };

      addEvent(window, 'resize', resize_tooltips);

      addEvent(window, 'scroll', resize_tooltips);

      window._old_serialize = null;

      if (typeof serialize !== 'undefined') window._old_serialize = window.serialize;

      _load_script("https://d3rxaij56vjege.cloudfront.net/form-serialize/0.3/serialize.min.js", function () {

        window._form_serialize = window.serialize;

        if (window._old_serialize) window.serialize = window._old_serialize;

      });

      var form_submit = function (e) {

        e.preventDefault();

        if (validate_form()) {

          // use this trick to get the submit button & disable it using plain javascript 

          document.querySelector('#_form_64_submit').disabled = true;

          var serialized = _form_serialize(document.getElementById('_form_64_')).replace(/%0A/g, '\\n');

          var err = form_to_submit.querySelector('._form_error');

          err ? err.parentNode.removeChild(err) : false;

          _load_script('https://dnaclass.activehosted.com/proc.php?' + serialized + '&jsonp=true');

        }

        return false;

      };

      addEvent(form_to_submit, 'submit', form_submit);

    })();






  }// form  

  //  formulario  Pre ebook 
  var formulario_ebook = jQuery("#_form_78_");
  if (formulario_ebook.length > 0) {

    const DEFAULT_ADDRESS = 'mparabens.html';
    const UTM_SOURCE = new URLSearchParams(window.location.search).get('utm_source');
    const UTM_CAMPAIGN = new URLSearchParams(window.location.search).get('utm_campaign');
    const UTM_MEDIUM = new URLSearchParams(window.location.search).get('utm_medium');
    const UTM_CONTENT = new URLSearchParams(window.location.search).get('utm_content');
    const UTM_TERM = new URLSearchParams(window.location.search).get('utm_term');
    const PMP = new URLSearchParams(window.location.search).get('pmp');
    const SCK_CAMPAIGN = new URLSearchParams(window.location.search).get('sck');
    const SRC_CAMPAIGN = new URLSearchParams(window.location.search).get('src');
    let __params = [];
    let urlhot = [];
    if (UTM_SOURCE) {
      __params.push(`utm_source=${UTM_SOURCE}`);
    };
    if (UTM_CAMPAIGN) {
      __params.push(`utm_campaign=${UTM_CAMPAIGN}`);
    };
    if (UTM_MEDIUM) {
      __params.push(`utm_medium=${UTM_MEDIUM}`);
    };
    if (UTM_CONTENT) {
      __params.push(`utm_content=${UTM_CONTENT}`);
    };
    if (UTM_TERM) {
      __params.push(`utm_term=${UTM_TERM}`);
    };
    if (PMP) {
      __params.push(`pmp=${PMP}`);
    };
    if (SCK_CAMPAIGN) {
      __params.push(`sck=${SCK_CAMPAIGN}`);
    };
    if (SRC_CAMPAIGN) {
      __params.push(`src=${SRC_CAMPAIGN}`);
    };
    if (__params.length > 0) {
      urlhot = `${DEFAULT_ADDRESS}?${__params.join('&')}`;
    } else {
      urlhot = DEFAULT_ADDRESS;
    };
    function abrirurl() {
      var linkurl = document.createElement('a');
      linkurl.href = urlhot;
      linkurl.target = "_parent";
      linkurl.click();
    };

    //form active 


    window.cfields = { "15": "pmp", "145": "utmsource", "149": "utmterm", "150": "utmmedium", "146": "utmcampaign" };

    window._show_thank_you = function (id, message, trackcmp_url, email) {


      abrirurl();

    };

    window._show_error = function (id, message, html) {

      var form = document.getElementById('_form_' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');

      if (old_error) old_error.parentNode.removeChild(old_error);

      err.innerHTML = message;

      err.className = '_error-inner _form_error _no_arrow';

      var wrapper = document.createElement('div');

      wrapper.className = '_form-inner';

      wrapper.appendChild(err);

      button.parentNode.insertBefore(wrapper, button);

      document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;

      if (html) {

        var div = document.createElement('div');

        div.className = '_error-html';

        div.innerHTML = html;

        err.appendChild(div);

      }

    };

    window._load_script = function (url, callback) {

      var head = document.querySelector('head'), script = document.createElement('script'), r = false;

      script.type = 'text/javascript';

      script.charset = 'utf-8';

      script.src = url;

      if (callback) {

        script.onload = script.onreadystatechange = function () {

          if (!r && (!this.readyState || this.readyState == 'complete')) {

            r = true;

            callback();

          }

        };

      }

      head.appendChild(script);

    };

    (function () {

      if (window.location.search.search("excludeform") !== -1) return false;

      var getCookie = function (name) {

        var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));

        return match ? match[2] : null;

      }

      var setCookie = function (name, value) {

        var now = new Date();

        var time = now.getTime();

        var expireTime = time + 1000 * 60 * 60 * 24 * 365;

        now.setTime(expireTime);

        document.cookie = name + '=' + value + '; expires=' + now + ';path=/';

      }

      var addEvent = function (element, event, func) {

        if (element.addEventListener) {

          element.addEventListener(event, func);

        } else {

          var oldFunc = element['on' + event];

          element['on' + event] = function () {

            oldFunc.apply(this, arguments);

            func.apply(this, arguments);

          };

        }

      }

      var _removed = false;

      var form_to_submit = document.getElementById('_form_78_');

      var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;



      var getUrlParam = function (name) {

        var regexStr = '[\?&]' + name + '=([^&#]*)';

        var results = new RegExp(regexStr, 'i').exec(window.location.href);

        return results != undefined ? decodeURIComponent(results[1]) : false;

      };



      for (var i = 0; i < allInputs.length; i++) {

        var regexStr = "field\\[(\\d+)\\]";

        var results = new RegExp(regexStr).exec(allInputs[i].name);

        if (results != undefined) {

          allInputs[i].dataset.name = window.cfields[results[1]];

        } else {

          allInputs[i].dataset.name = allInputs[i].name;

        }

        var fieldVal = getUrlParam(allInputs[i].dataset.name);



        if (fieldVal) {

          if (allInputs[i].dataset.autofill === "false") {

            continue;

          }

          if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {

            if (allInputs[i].value == fieldVal) {

              allInputs[i].checked = true;

            }

          } else {

            allInputs[i].value = fieldVal;

          }

        }

      }



      var remove_tooltips = function () {

        for (var i = 0; i < tooltips.length; i++) {

          tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);

        }

        tooltips = [];

      };

      var remove_tooltip = function (elem) {

        for (var i = 0; i < tooltips.length; i++) {

          if (tooltips[i].elem === elem) {

            tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);

            tooltips.splice(i, 1);

            return;

          }

        }

      };

      var create_tooltip = function (elem, text) {

        var tooltip = document.createElement('div'), arrow = document.createElement('div'), inner = document.createElement('div'), new_tooltip = {};

        if (elem.type != 'radio' && elem.type != 'checkbox') {

          tooltip.className = '_error';

          arrow.className = '_error-arrow';

          inner.className = '_error-inner';

          inner.innerHTML = text;

          tooltip.appendChild(arrow);

          tooltip.appendChild(inner);

          elem.parentNode.appendChild(tooltip);

        } else {

          tooltip.className = '_error-inner _no_arrow';

          tooltip.innerHTML = text;

          elem.parentNode.insertBefore(tooltip, elem);

          new_tooltip.no_arrow = true;

        }

        new_tooltip.tip = tooltip;

        new_tooltip.elem = elem;

        tooltips.push(new_tooltip);

        return new_tooltip;

      };

      var resize_tooltip = function (tooltip) {

        var rect = tooltip.elem.getBoundingClientRect();

        var doc = document.documentElement, scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0));

        if (scrollPosition < 40) {

          tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';

        } else {

          tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';

        }

      };

      var resize_tooltips = function () {

        if (_removed) return;

        for (var i = 0; i < tooltips.length; i++) {

          if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);

        }

      };

      var validate_field = function (elem, remove) {

        var tooltip = null, value = elem.value, no_error = true;

        remove ? remove_tooltip(elem) : false;

        if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');

        if (elem.getAttribute('required') !== null) {

          if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {

            var elems = form_to_submit.elements[elem.name];

            if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {

              no_error = elem.checked;

            }

            else {

              no_error = false;

              for (var i = 0; i < elems.length; i++) {

                if (elems[i].checked) no_error = true;

              }

            }

            if (!no_error) {

              tooltip = create_tooltip(elem, "Por favor, selecione uma opção.");

            }

          } else if (elem.type == 'checkbox') {

            var elems = form_to_submit.elements[elem.name], found = false, err = [];

            no_error = true;

            for (var i = 0; i < elems.length; i++) {

              if (elems[i].getAttribute('required') === null) continue;

              if (!found && elems[i] !== elem) return true;

              found = true;

              elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');

              if (!elems[i].checked) {

                no_error = false;

                elems[i].className = elems[i].className + ' _has_error';

                err.push("Marcar %s é necessário".replace("%s", elems[i].value));

              }

            }

            if (!no_error) {

              tooltip = create_tooltip(elem, err.join('<br/>'));

            }

          } else if (elem.tagName == 'SELECT') {

            var selected = true;

            if (elem.multiple) {

              selected = false;

              for (var i = 0; i < elem.options.length; i++) {

                if (elem.options[i].selected) {

                  selected = true;

                  break;

                }

              }

            } else {

              for (var i = 0; i < elem.options.length; i++) {

                if (elem.options[i].selected && !elem.options[i].value) {

                  selected = false;

                }

              }

            }

            if (!selected) {

              elem.className = elem.className + ' _has_error';

              no_error = false;

              tooltip = create_tooltip(elem, "Por favor, selecione uma opção.");

            }

          } else if (value === undefined || value === null || value === '') {

            elem.className = elem.className + ' _has_error';

            no_error = false;

            tooltip = create_tooltip(elem, "Este campo é necessário.");

          }

        }

        if (no_error && elem.name == 'email') {

          if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {

            elem.className = elem.className + ' _has_error';

            no_error = false;

            tooltip = create_tooltip(elem, "Digite um e-mail válido");

          }

        }

        if (no_error && /date_field/.test(elem.className)) {

          if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {

            elem.className = elem.className + ' _has_error';

            no_error = false;

            tooltip = create_tooltip(elem, "Digite uma data válida.");

          }

        }

        tooltip ? resize_tooltip(tooltip) : false;

        return no_error;

      };

      var needs_validate = function (el) {

        if (el.getAttribute('required') !== null) {

          return true

        }

        if (el.name === 'email' && el.value !== "") {

          return true

        }

        return false

      };

      var validate_form = function (e) {

        var err = form_to_submit.querySelector('._form_error'), no_error = true;

        if (!submitted) {

          submitted = true;

          for (var i = 0, len = allInputs.length; i < len; i++) {

            var input = allInputs[i];

            if (needs_validate(input)) {

              if (input.type == 'text') {

                addEvent(input, 'blur', function () {

                  this.value = this.value.trim();

                  validate_field(this, true);

                });

                addEvent(input, 'input', function () {

                  validate_field(this, true);

                });

              } else if (input.type == 'radio' || input.type == 'checkbox') {

                (function (el) {

                  var radios = form_to_submit.elements[el.name];

                  for (var i = 0; i < radios.length; i++) {

                    addEvent(radios[i], 'click', function () {

                      validate_field(el, true);

                    });

                  }

                })(input);

              } else if (input.tagName == 'SELECT') {

                addEvent(input, 'change', function () {

                  validate_field(this, true);

                });

              } else if (input.type == 'textarea') {

                addEvent(input, 'input', function () {

                  validate_field(this, true);

                });

              }

            }

          }

        }

        remove_tooltips();

        for (var i = 0, len = allInputs.length; i < len; i++) {

          var elem = allInputs[i];

          if (needs_validate(elem)) {

            if (elem.tagName.toLowerCase() !== "select") {

              elem.value = elem.value.trim();

            }

            validate_field(elem) ? true : no_error = false;

          }

        }

        if (!no_error && e) {

          e.preventDefault();

        }

        resize_tooltips();

        return no_error;

      };

      addEvent(window, 'resize', resize_tooltips);

      addEvent(window, 'scroll', resize_tooltips);

      window._old_serialize = null;

      if (typeof serialize !== 'undefined') window._old_serialize = window.serialize;

      _load_script("https://d3rxaij56vjege.cloudfront.net/form-serialize/0.3/serialize.min.js", function () {

        window._form_serialize = window.serialize;

        if (window._old_serialize) window.serialize = window._old_serialize;

      });

      var form_submit = function (e) {

        e.preventDefault();

        if (validate_form()) {

          // use this trick to get the submit button & disable it using plain javascript 

          document.querySelector('#_form_78_submit').disabled = true;

          var serialized = _form_serialize(document.getElementById('_form_78_')).replace(/%0A/g, '\\n');

          var err = form_to_submit.querySelector('._form_error');

          err ? err.parentNode.removeChild(err) : false;

          _load_script('https://dnaclass.activehosted.com/proc.php?' + serialized + '&jsonp=true');

        }

        return false;

      };

      addEvent(form_to_submit, 'submit', form_submit);

    })();


  }// form  


  //  formulario  inscrição 
  var formulario_ebook = jQuery("#_form_90_");
  if (formulario_ebook.length > 0) {

    const DEFAULT_ADDRESS = 'https://pay.hotmart.com/P62434518E?checkoutMode=10&bid=1638900278363';
    const UTM_SOURCE = new URLSearchParams(window.location.search).get('utm_source');
    const UTM_CAMPAIGN = new URLSearchParams(window.location.search).get('utm_campaign');
    const UTM_MEDIUM = new URLSearchParams(window.location.search).get('utm_medium');
    const UTM_CONTENT = new URLSearchParams(window.location.search).get('utm_content');
    const UTM_TERM = new URLSearchParams(window.location.search).get('utm_term');
    const PMP = new URLSearchParams(window.location.search).get('pmp');
    const SCK_CAMPAIGN = new URLSearchParams(window.location.search).get('sck');
    const SRC_CAMPAIGN = new URLSearchParams(window.location.search).get('src');
    let __params = [];
    let urlhot = [];
    if (UTM_SOURCE) {
      __params.push(`utm_source=${UTM_SOURCE}`);
    };
    if (UTM_CAMPAIGN) {
      __params.push(`utm_campaign=${UTM_CAMPAIGN}`);
    };
    if (UTM_MEDIUM) {
      __params.push(`utm_medium=${UTM_MEDIUM}`);
    };
    if (UTM_CONTENT) {
      __params.push(`utm_content=${UTM_CONTENT}`);
    };
    if (UTM_TERM) {
      __params.push(`utm_term=${UTM_TERM}`);
    };
    if (PMP) {
      __params.push(`pmp=${PMP}`);
    };
    if (SCK_CAMPAIGN) {
      __params.push(`sck=${SCK_CAMPAIGN}`);
    };
    if (SRC_CAMPAIGN) {
      __params.push(`src=${SRC_CAMPAIGN}`);
    };
    if (__params.length > 0) {
      urlhot = `${DEFAULT_ADDRESS}?${__params.join('&')}`;
    } else {
      urlhot = DEFAULT_ADDRESS;
    };
    function abrirurl() {
      var linkurl = document.createElement('a');
      linkurl.href = urlhot;
      linkurl.target = "_parent";
      linkurl.click();
    };

    //form active 
    window.cfields = { "15": "pmp", "145": "utmsource", "153": "utmcontent", "146": "utmcampaign", "150": "utmmedium", "149": "utmterm" };
    window._show_thank_you = function (id, message, trackcmp_url, email) {

      abrirurl();

    };
    window._show_error = function (id, message, html) {

      var form = document.getElementById('_form_' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');

      if (old_error) old_error.parentNode.removeChild(old_error);

      err.innerHTML = message;

      err.className = '_error-inner _form_error _no_arrow';

      var wrapper = document.createElement('div');

      wrapper.className = '_form-inner';

      wrapper.appendChild(err);

      button.parentNode.insertBefore(wrapper, button);

      document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;

      if (html) {

        var div = document.createElement('div');

        div.className = '_error-html';

        div.innerHTML = html;

        err.appendChild(div);

      }

    };

    window._load_script = function (url, callback) {

      var head = document.querySelector('head'), script = document.createElement('script'), r = false;

      script.type = 'text/javascript';

      script.charset = 'utf-8';

      script.src = url;

      if (callback) {

        script.onload = script.onreadystatechange = function () {

          if (!r && (!this.readyState || this.readyState == 'complete')) {

            r = true;

            callback();

          }

        };

      }

      head.appendChild(script);

    };

    (function () {

      if (window.location.search.search("excludeform") !== -1) return false;

      var getCookie = function (name) {

        var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));

        return match ? match[2] : null;

      }

      var setCookie = function (name, value) {

        var now = new Date();

        var time = now.getTime();

        var expireTime = time + 1000 * 60 * 60 * 24 * 365;

        now.setTime(expireTime);

        document.cookie = name + '=' + value + '; expires=' + now + ';path=/';

      }

      var addEvent = function (element, event, func) {

        if (element.addEventListener) {

          element.addEventListener(event, func);

        } else {

          var oldFunc = element['on' + event];

          element['on' + event] = function () {

            oldFunc.apply(this, arguments);

            func.apply(this, arguments);

          };

        }

      }

      var _removed = false;

      var form_to_submit = document.getElementById('_form_90_');

      var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;



      var getUrlParam = function (name) {

        var regexStr = '[\?&]' + name + '=([^&#]*)';

        var results = new RegExp(regexStr, 'i').exec(window.location.href);

        return results != undefined ? decodeURIComponent(results[1]) : false;

      };



      for (var i = 0; i < allInputs.length; i++) {

        var regexStr = "field\\[(\\d+)\\]";

        var results = new RegExp(regexStr).exec(allInputs[i].name);

        if (results != undefined) {

          allInputs[i].dataset.name = window.cfields[results[1]];

        } else {

          allInputs[i].dataset.name = allInputs[i].name;

        }

        var fieldVal = getUrlParam(allInputs[i].dataset.name);



        if (fieldVal) {

          if (allInputs[i].dataset.autofill === "false") {

            continue;

          }

          if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {

            if (allInputs[i].value == fieldVal) {

              allInputs[i].checked = true;

            }

          } else {

            allInputs[i].value = fieldVal;

          }

        }

      }



      var remove_tooltips = function () {

        for (var i = 0; i < tooltips.length; i++) {

          tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);

        }

        tooltips = [];

      };

      var remove_tooltip = function (elem) {

        for (var i = 0; i < tooltips.length; i++) {

          if (tooltips[i].elem === elem) {

            tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);

            tooltips.splice(i, 1);

            return;

          }

        }

      };

      var create_tooltip = function (elem, text) {

        var tooltip = document.createElement('div'), arrow = document.createElement('div'), inner = document.createElement('div'), new_tooltip = {};

        if (elem.type != 'radio' && elem.type != 'checkbox') {

          tooltip.className = '_error';

          arrow.className = '_error-arrow';

          inner.className = '_error-inner';

          inner.innerHTML = text;

          tooltip.appendChild(arrow);

          tooltip.appendChild(inner);

          elem.parentNode.appendChild(tooltip);

        } else {

          tooltip.className = '_error-inner _no_arrow';

          tooltip.innerHTML = text;

          elem.parentNode.insertBefore(tooltip, elem);

          new_tooltip.no_arrow = true;

        }

        new_tooltip.tip = tooltip;

        new_tooltip.elem = elem;

        tooltips.push(new_tooltip);

        return new_tooltip;

      };

      var resize_tooltip = function (tooltip) {

        var rect = tooltip.elem.getBoundingClientRect();

        var doc = document.documentElement, scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0));

        if (scrollPosition < 40) {

          tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';

        } else {

          tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';

        }

      };

      var resize_tooltips = function () {

        if (_removed) return;

        for (var i = 0; i < tooltips.length; i++) {

          if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);

        }

      };

      var validate_field = function (elem, remove) {

        var tooltip = null, value = elem.value, no_error = true;

        remove ? remove_tooltip(elem) : false;

        if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');

        if (elem.getAttribute('required') !== null) {

          if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {

            var elems = form_to_submit.elements[elem.name];

            if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {

              no_error = elem.checked;

            }

            else {

              no_error = false;

              for (var i = 0; i < elems.length; i++) {

                if (elems[i].checked) no_error = true;

              }

            }

            if (!no_error) {

              tooltip = create_tooltip(elem, "Por favor, selecione uma opção.");

            }

          } else if (elem.type == 'checkbox') {

            var elems = form_to_submit.elements[elem.name], found = false, err = [];

            no_error = true;

            for (var i = 0; i < elems.length; i++) {

              if (elems[i].getAttribute('required') === null) continue;

              if (!found && elems[i] !== elem) return true;

              found = true;

              elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');

              if (!elems[i].checked) {

                no_error = false;

                elems[i].className = elems[i].className + ' _has_error';

                err.push("Marcar %s é necessário".replace("%s", elems[i].value));

              }

            }

            if (!no_error) {

              tooltip = create_tooltip(elem, err.join('<br/>'));

            }

          } else if (elem.tagName == 'SELECT') {

            var selected = true;

            if (elem.multiple) {

              selected = false;

              for (var i = 0; i < elem.options.length; i++) {

                if (elem.options[i].selected) {

                  selected = true;

                  break;

                }

              }

            } else {

              for (var i = 0; i < elem.options.length; i++) {

                if (elem.options[i].selected && !elem.options[i].value) {

                  selected = false;

                }

              }

            }

            if (!selected) {

              elem.className = elem.className + ' _has_error';

              no_error = false;

              tooltip = create_tooltip(elem, "Por favor, selecione uma opção.");

            }

          } else if (value === undefined || value === null || value === '') {

            elem.className = elem.className + ' _has_error';

            no_error = false;

            tooltip = create_tooltip(elem, "Este campo é necessário.");

          }

        }

        if (no_error && elem.name == 'email') {

          if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {

            elem.className = elem.className + ' _has_error';

            no_error = false;

            tooltip = create_tooltip(elem, "Digite um e-mail válido");

          }

        }

        if (no_error && /date_field/.test(elem.className)) {

          if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {

            elem.className = elem.className + ' _has_error';

            no_error = false;

            tooltip = create_tooltip(elem, "Digite uma data válida.");

          }

        }

        tooltip ? resize_tooltip(tooltip) : false;

        return no_error;

      };

      var needs_validate = function (el) {

        if (el.getAttribute('required') !== null) {

          return true

        }

        if (el.name === 'email' && el.value !== "") {

          return true

        }

        return false

      };

      var validate_form = function (e) {

        var err = form_to_submit.querySelector('._form_error'), no_error = true;

        if (!submitted) {

          submitted = true;

          for (var i = 0, len = allInputs.length; i < len; i++) {

            var input = allInputs[i];

            if (needs_validate(input)) {

              if (input.type == 'text') {

                addEvent(input, 'blur', function () {

                  this.value = this.value.trim();

                  validate_field(this, true);

                });

                addEvent(input, 'input', function () {

                  validate_field(this, true);

                });

              } else if (input.type == 'radio' || input.type == 'checkbox') {

                (function (el) {

                  var radios = form_to_submit.elements[el.name];

                  for (var i = 0; i < radios.length; i++) {

                    addEvent(radios[i], 'click', function () {

                      validate_field(el, true);

                    });

                  }

                })(input);

              } else if (input.tagName == 'SELECT') {

                addEvent(input, 'change', function () {

                  validate_field(this, true);

                });

              } else if (input.type == 'textarea') {

                addEvent(input, 'input', function () {

                  validate_field(this, true);

                });

              }

            }

          }

        }

        remove_tooltips();

        for (var i = 0, len = allInputs.length; i < len; i++) {

          var elem = allInputs[i];

          if (needs_validate(elem)) {

            if (elem.tagName.toLowerCase() !== "select") {

              elem.value = elem.value.trim();

            }

            validate_field(elem) ? true : no_error = false;

          }

        }

        if (!no_error && e) {

          e.preventDefault();

        }

        resize_tooltips();

        return no_error;

      };

      addEvent(window, 'resize', resize_tooltips);

      addEvent(window, 'scroll', resize_tooltips);

      window._old_serialize = null;

      if (typeof serialize !== 'undefined') window._old_serialize = window.serialize;

      _load_script("https://d3rxaij56vjege.cloudfront.net/form-serialize/0.3/serialize.min.js", function () {

        window._form_serialize = window.serialize;

        if (window._old_serialize) window.serialize = window._old_serialize;

      });

      var form_submit = function (e) {

        e.preventDefault();

        if (validate_form()) {

          // use this trick to get the submit button & disable it using plain javascript 

          document.querySelector('#_form_90_submit').disabled = true;

          var serialized = _form_serialize(document.getElementById('_form_90_')).replace(/%0A/g, '\\n');

          var err = form_to_submit.querySelector('._form_error');

          err ? err.parentNode.removeChild(err) : false;

          _load_script('https://dnaclass.activehosted.com/proc.php?' + serialized + '&jsonp=true');

        }

        return false;

      };

      addEvent(form_to_submit, 'submit', form_submit);

    })();

  }// form  

  var show_myModal = jQuery("#myModal");
  if (show_myModal.length > 0) {
    //  JS modal
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      modal.style.display = "none";
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
});

