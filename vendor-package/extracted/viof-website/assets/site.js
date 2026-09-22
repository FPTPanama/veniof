(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // sections ease in as they are scrolled into view
  if ('IntersectionObserver' in window && !calm) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, wait = parseInt(el.getAttribute('data-wait') || '0', 10);
        io.unobserve(el);
        el.style.transitionDelay = wait + 'ms';
        el.classList.add('in');
        setTimeout(function () { el.classList.remove('rv', 'in'); el.style.transitionDelay = ''; }, 1000 + wait);
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -5% 0px' });
    Array.prototype.forEach.call(document.querySelectorAll('main > section > div, main ~ section > div'), function (holder) {
      Array.prototype.forEach.call(holder.children, function (block) {
        var st = block.getAttribute('style') || '', kids = block.children;
        if (/display:\s*grid/.test(st) && kids.length > 1 && kids.length <= 8) {
          Array.prototype.forEach.call(kids, function (k, i) { k.classList.add('rv'); k.setAttribute('data-wait', String(i * 110)); io.observe(k); });
        } else { block.classList.add('rv'); io.observe(block); }
      });
    });
  }

  // compact header that follows the reader on wide screens
  var head = document.querySelector('header.site-head');
  if (head) {
    var bar = document.createElement('div'), inner = document.createElement('div');
    bar.className = 'stick'; inner.className = 'stick-in';
    inner.appendChild(head.cloneNode(true)); bar.appendChild(inner); document.body.appendChild(bar);
    var onScroll = function () { bar.classList.toggle('show', window.scrollY > 560); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  // menu on small screens, and the contact form
  document.addEventListener('click', function (ev) {
    var burger = ev.target.closest ? ev.target.closest('.burger') : null;
    if (burger) {
      var h = burger.closest('header'), open = h.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      return;
    }
    var send = ev.target.closest ? ev.target.closest('[data-send]') : null;
    if (send) sendForm(send);
  });

  function sendForm(btn) {
    var box = btn.closest('[data-form]');
    if (!box) return;
    var st = box.querySelector('[data-status]');
    function val(n) { var el = box.querySelector('[name="' + n + '"]'); return el ? (el.value || '').trim() : ''; }
    var d = { name: val('f-name'), organization: val('f-org'), email: val('f-email'), country: val('f-country'), interest: val('f-role'), message: val('f-msg') };
    var ack = box.querySelector('[name="f-ack"]');
    if (!d.name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email) || !d.message || (ack && !ack.checked)) { st.textContent = btn.getAttribute('data-req'); return; }
    var to = box.getAttribute('data-to'), subject = box.getAttribute('data-subject') + ': ' + d.name, label = btn.textContent;
    btn.disabled = true; btn.textContent = btn.getAttribute('data-sending'); st.textContent = '';
    function done(ok) {
      btn.disabled = false; btn.textContent = label;
      st.textContent = btn.getAttribute(ok ? 'data-ok' : 'data-fail');
      if (ok) { Array.prototype.forEach.call(box.querySelectorAll('input, textarea, select'), function (el) { if (el.type === 'checkbox') { el.checked = false; } else { el.value = ''; } }); return; }
      var lines = ['Name: ' + d.name, 'Organization: ' + d.organization, 'Email: ' + d.email, 'Country: ' + d.country, 'Interest: ' + d.interest, '', d.message];
      try { window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n')); } catch (err) {}
    }
    if (!window.fetch) { done(false); return; }
    var payload = { _subject: subject, _template: 'table', _honey: '', name: d.name, organization: d.organization, email: d.email,
                    country: d.country, interest: d.interest, message: d.message, page: document.title };
    fetch('https://formsubmit.co/ajax/' + encodeURIComponent(to), { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(payload) })
      .then(function (r) { return r.json().then(function (j) { return r.ok && String(j.success) === 'true'; }); })
      .then(done).catch(function () { done(false); });
  }

})();
