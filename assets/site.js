/* Go Capital · componentes compartidos (header, footer, flotantes) e interacciones */
(() => {
  const page = document.body.dataset.page || '';
  const chev = '<svg class="chev" width="12" height="12" viewBox="0 0 12 12"><path d="M3 4.5 6 7.5l3-3" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>';
  const wordmark = '<span class="wordmark" aria-hidden="true"><b>GO</b><span>CAPITAL</span></span>';
  const sun = '<svg class="sun" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
  const moon = '<svg class="moon" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
  const toggle = `<button class="theme-toggle" type="button" aria-label="Cambiar tema">${sun}${moon}</button>`;
  const on = p => (p === page ? ' active' : '');

  /* ---------- Header ---------- */
  const header = `
<div class="topbar"><div class="wrap">
  <span>Parte del ecosistema Grupo GO</span>
  <div class="tb-links">
    <a href="tel:+51940416320">+51 940 416 320</a>
    <a href="mailto:info@gocapital.com.pe">info@gocapital.com.pe</a>
    <a href="contacto.html">Oficina San Isidro</a>
  </div>
</div></div>
<header class="nav" id="nav"><div class="wrap">
  <a href="index.html" class="logo" aria-label="Go Capital, inicio">${wordmark}</a>
  <ul class="menu">
    <li><button class="${on('invierte').trim()}" aria-haspopup="true">Invierte ${chev}</button>
      <div class="dropdown">
        <a href="invierte.html"><strong>Fondo Bonos de Titulización Inmobiliario</strong><span>En dólares y en soles</span></a>
        <a href="invierte.html#como-funciona"><strong>Cómo funciona</strong><span>Estructura fiduciaria del fondo</span></a>
        <a href="invierte.html#como-invertir"><strong>Cómo invertir</strong><span>4 pasos, 100% virtual</span></a>
      </div></li>
    <li><button class="${on('nosotros').trim()}" aria-haspopup="true">Nosotros ${chev}</button>
      <div class="dropdown">
        <a href="nosotros.html"><strong>Quiénes somos</strong><span>Go Capital y el Grupo GO</span></a>
        <a href="nosotros.html#equipo"><strong>Equipo gestor</strong><span>Las personas detrás de tu inversión</span></a>
        <a href="nosotros.html#aliados"><strong>Aliados</strong><span>Socios de confianza</span></a>
      </div></li>
    <li><a class="${on('asesores').trim()}" href="asesores.html">Sé asesor</a></li>
    <li><a class="${on('aprende').trim()}" href="aprende.html">Aprende</a></li>
    <li><a class="${on('ayuda').trim()}" href="ayuda.html">Centro de ayuda</a></li>
  </ul>
  <div class="nav-cta">
    ${toggle}
    <a href="zona-inversionistas.html" class="btn btn-ghost btn-sm">Zona inversionistas</a>
    <a href="contacto.html" class="btn btn-primary btn-sm">Agenda una reunión</a>
    <button class="burger" id="burger" aria-label="Abrir menú"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#0E3B2E" stroke-width="2" stroke-linecap="round"/></svg></button>
  </div>
</div></header>
<div class="drawer" id="drawer" aria-hidden="true"><div class="drawer-panel" role="dialog" aria-label="Menú">
  <button class="review-close" id="drawerClose" aria-label="Cerrar menú" style="position:static;align-self:flex-end;margin-bottom:8px">×</button>
  <a class="m${on('inicio')}" href="index.html">Inicio</a>
  <a class="m${on('invierte')}" href="invierte.html">Invierte</a>
  <div class="sub"><a href="invierte.html#como-funciona">Cómo funciona</a><a href="invierte.html#como-invertir">Cómo invertir</a></div>
  <a class="m${on('nosotros')}" href="nosotros.html">Nosotros</a>
  <div class="sub"><a href="nosotros.html#equipo">Equipo gestor</a><a href="nosotros.html#aliados">Aliados</a></div>
  <a class="m${on('asesores')}" href="asesores.html">Sé asesor</a>
  <a class="m${on('aprende')}" href="aprende.html">Aprende</a>
  <a class="m${on('ayuda')}" href="ayuda.html">Centro de ayuda</a>
  <div class="drawer-theme"><span>Tema claro / oscuro</span>${toggle}</div>
  <a href="zona-inversionistas.html" class="btn btn-ghost">Zona inversionistas</a>
  <a href="contacto.html" class="btn btn-primary">Agenda una reunión</a>
</div></div>`;

  /* ---------- Footer ---------- */
  const footer = `
<footer><div class="wrap">
  <div class="fgrid4">
    <div>
      <a href="index.html" class="logo" aria-label="Go Capital, inicio">${wordmark}</a>
      <p class="slogan">Tu dinero en terreno seguro.</p>
      <p>Parte del ecosistema Grupo GO.</p>
    </div>
    <div><h4>Invierte</h4><ul><li><a href="invierte.html">Fondo de inversión privado</a></li><li><a href="invierte.html#como-funciona">Cómo funciona</a></li><li><a href="invierte.html#como-invertir">Cómo invertir</a></li><li><a href="aprende.html">Artículos</a></li></ul></div>
    <div><h4>Nosotros</h4><ul><li><a href="nosotros.html">Grupo GO</a></li><li><a href="nosotros.html#equipo">Equipo gestor</a></li><li><a href="asesores.html">Trabaja con nosotros</a></li><li><a href="ayuda.html">Centro de ayuda</a></li></ul></div>
    <div><h4>Contacto</h4><ul><li><a href="tel:+51940416320">+51 940 416 320</a></li><li><a href="mailto:info@gocapital.com.pe">info@gocapital.com.pe</a></li><li><a href="contacto.html#ubicacion">Av. República de Panamá 3418, of. 1901, San Isidro</a></li></ul></div>
  </div>
  <div class="disclaimer">
    <p><strong>Aviso importante.</strong> Go Capital (SAAB Gestora de Fondos S.A.C.) es una Sociedad Gestora de Fondos de Inversión exclusivamente privados, no licenciada ni supervisada por la Superintendencia del Mercado de Valores (SMV). Los fondos que administra no son supervisados por la SMV y se colocan exclusivamente por oferta privada. El fideicomiso es administrado por Trust Sociedad Titulizadora, fiduciario regulado por la SMV en sus funciones fiduciarias.</p>
    <p>El Fondo y los valores objeto de la oferta privada no se encuentran inscritos en el Registro Público del Mercado de Valores ni están sujetos a supervisión de la SMV. La SMV no supervisa la información proporcionada a los potenciales inversionistas ni recomienda o garantiza la inversión.</p>
    <p>La información de este sitio es meramente informativa y no constituye oferta ni recomendación de inversión. Los resultados pasados no garantizan resultados futuros. La decisión de inversión corresponde exclusivamente al potencial inversionista, quien deberá efectuar su propia evaluación legal, financiera y tributaria.</p>
  </div>
  <div class="legal">
    <span>© 2026 Go Capital</span>
    <nav><a href="#">Términos y condiciones</a><a href="#">Política de privacidad</a><a href="#">Libro de reclamaciones</a></nav>
  </div>
</div></footer>
<a class="wa" href="https://wa.me/51940416320?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20Go%20Capital" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
  <svg width="30" height="30" viewBox="0 0 32 32" fill="#fff"><path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-1-2.2-1s-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7 0a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6 0-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5 2.1.9 3 1 4 .8.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5 0-.2-.3-.3-.6-.4z"/></svg>
</a>
<button class="review-btn" id="reviewOpen"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v12H8l-4 4z" stroke="#0A2C22" stroke-width="2" stroke-linejoin="round"/></svg><span>Notas para Gerencia</span></button>
<div class="review" id="review" role="dialog" aria-modal="true" aria-labelledby="rv-title"><div class="review-panel">
  <button class="review-close" id="reviewClose" aria-label="Cerrar">×</button>
  <span class="eyebrow">Para Gerencia General · uso interno</span>
  <h2 id="rv-title">Una web al nivel de la fintech líder</h2>
  <p>Mensaje de portada: “Tu capital crece sobre terreno firme”. El slogan de marca “Tu dinero en terreno seguro” se mantiene como firma en el pie de página. La estructura sigue el modelo de Prestamype, adaptada a la marca Go Capital en colores claros.</p>
  <h4>Mapa del sitio</h4>
  <table><thead><tr><th>Vista</th><th>Contenido</th></tr></thead><tbody>
    <tr><td><a href="index.html">Inicio</a></td><td>Carrusel, “¿Qué quieres hacer hoy?”, cifras, resumen de respaldo, testimonios, aliados y artículos</td></tr>
    <tr><td><a href="invierte.html">Invierte</a></td><td>Ficha del fondo (sin rendimientos), estructura fiduciaria, 4 pasos y preguntas del proceso</td></tr>
    <tr><td><a href="nosotros.html">Nosotros</a></td><td>Quiénes somos, ecosistema Grupo GO, gobierno corporativo, equipo, aliados y oficina</td></tr>
    <tr><td><a href="asesores.html">Sé asesor</a></td><td>Programa de Investment Advisors, postulación y programa de referidos</td></tr>
    <tr><td><a href="aprende.html">Aprende</a> / <a href="articulo.html">Artículo</a></td><td>Blog con filtros por pilar de contenido y plantilla de artículo</td></tr>
    <tr><td><a href="ayuda.html">Centro de ayuda</a></td><td>Buscador y preguntas frecuentes por categoría</td></tr>
    <tr><td><a href="contacto.html">Contacto</a></td><td>Formulario sin DNI, datos de oficina y mapa</td></tr>
    <tr><td><a href="zona-inversionistas.html">Zona inversionistas</a></td><td>Pantalla de acceso (maqueta; plataforma por definir)</td></tr>
  </tbody></table>
  <h4>Qué tomamos de Prestamype</h4>
  <table><thead><tr><th>Prestamype</th><th>Go Capital</th></tr></thead><tbody>
    <tr><td>Menú con desplegables y botón “Iniciar sesión”</td><td>Invierte / Nosotros / Sé asesor / Aprende / Centro de ayuda + “Zona inversionistas”</td></tr>
    <tr><td>Carrusel de banners en portada</td><td>3 banners: inversión, respaldo real y reclutamiento de asesores</td></tr>
    <tr><td>Tarjetas de producto con CTA</td><td>“¿Qué quieres hacer hoy?”: invertir, ser asesor o referir</td></tr>
    <tr><td>Cifras en tarjetas</td><td>+10 años, +US$ 4 MM, +23 proyectos, +3,000 familias</td></tr>
    <tr><td>“Nuestros clientes opinan”</td><td>Testimonios de inversionistas (reales, con autorización)</td></tr>
    <tr><td>“Nuestros aliados”</td><td>Trust S.T., Go House, Keynua, Grupo GO</td></tr>
    <tr><td>Blog de artículos</td><td>Sección “Aprende”, alimentada por los pilares de contenido</td></tr>
    <tr><td>Centro de ayuda / FAQ</td><td>Preguntas frecuentes</td></tr>
  </tbody></table>
  <h4>Qué no tomamos, a propósito</h4>
  <ul>
    <li>Prestamype publica rentabilidades (“hasta 20%”). Go Capital coloca por oferta privada: la web no muestra rendimiento, montos mínimos ni plazos.</li>
    <li>No se usa el logo de la SMV (hoy aparece en el diagrama de la web actual y puede inducir a error).</li>
  </ul>
  <h4>Mejoras frente a la web actual</h4>
  <ul>
    <li>Sitio propio con marca Go Capital, fuera de la página del Grupo GO.</li>
    <li>Formulario sin DNI en el primer paso, para no perder contactos.</li>
    <li>Botón de WhatsApp siempre visible.</li>
    <li>Contenido real (video del Fundo de Asia, equipo) en vez de fotos de stock.</li>
  </ul>
  <h4>Por validar</h4>
  <ul>
    <li>Disclaimer oficial incluido en el pie de página (mismo texto del factsheet); validar redacción final con la Dra. Carmen Higinio.</li>
    <li>Logo oficial en vector, fotos y videos.</li>
    <li>Testimonios reales con autorización de cada inversionista.</li>
    <li>Integración del formulario con CRM y WhatsApp Business.</li>
    <li>Logos de aliados (Go House, Trust S.T., Keynua, Grupo GO) aplicados; conviene reemplazarlos por versiones SVG sin márgenes y confirmar con cada aliado el permiso de uso de su marca.</li>
    <li>Logo aplicado en versión positiva (tema claro) y negativa (tema oscuro); falta el archivo vectorial (SVG) oficial para reemplazar la reproducción tipográfica.</li>
    <li>Textos marcados como <span class="pending">Por validar</span> en las vistas internas (redactados como propuesta).</li>
  </ul>
</div></div>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';
  const EASE_IN_OUT = 'cubic-bezier(0.77, 0, 0.175, 1)';

  /* ---------- Theme toggle: círculo que se expande desde el botón (View Transitions) ---------- */
  const switchTheme = btn => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    if (!document.startViewTransition || reduce) { gcSetTheme(next); return; }
    const r = btn.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const vt = document.startViewTransition(() => gcSetTheme(next));
    vt.ready.then(() => document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 550, easing: EASE_IN_OUT, pseudoElement: '::view-transition-new(root)' }
    ));
  };
  document.querySelectorAll('.theme-toggle').forEach(b => b.addEventListener('click', () => switchTheme(b)));
  gcSetTheme(document.documentElement.dataset.theme);

  /* ---------- Sticky header ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 10);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Drawer (los enlaces entran en cascada de 30 ms) ---------- */
  const drawer = document.getElementById('drawer');
  [...drawer.querySelector('.drawer-panel').children].forEach((el, k) => el.style.setProperty('--i', Math.min(k, 10)));
  let lastFocus = null;
  const setDrawer = open => {
    if (open === drawer.classList.contains('open')) return;
    drawer.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', !open);
    if (open) { lastFocus = document.activeElement; document.getElementById('drawerClose').focus({ preventScroll: true }); }
    else if (lastFocus) lastFocus.focus({ preventScroll: true });
  };
  document.getElementById('burger').onclick = () => setDrawer(true);
  document.getElementById('drawerClose').onclick = () => setDrawer(false);
  drawer.addEventListener('click', e => { if (e.target === drawer || e.target.closest('a')) setDrawer(false); });

  /* ---------- Review panel (modal) ---------- */
  const rv = document.getElementById('review');
  const setReview = open => {
    rv.classList.toggle('open', open);
    if (open) { lastFocus = document.activeElement; document.getElementById('reviewClose').focus({ preventScroll: true }); }
    else if (lastFocus) lastFocus.focus({ preventScroll: true });
  };
  document.getElementById('reviewOpen').onclick = () => setReview(true);
  document.getElementById('reviewClose').onclick = () => setReview(false);
  rv.addEventListener('click', e => { if (e.target === rv) setReview(false); });
  addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (rv.classList.contains('open')) setReview(false);
    setDrawer(false);
  });

  /* ---------- Carousel ---------- */
  const car = document.getElementById('carousel');
  if (car) {
    const slides = [...car.querySelectorAll('.slide')];
    const dotsWrap = car.querySelector('.dots');
    const DELAY = 7000;
    let i = 0, timer;
    const holds = new Set();              // motivos de pausa: hover, foco, pestaña oculta, fuera de vista
    const autoplay = !reduce;             // con movimiento reducido no hay avance automático
    const dots = slides.map((_, k) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', `Ir al banner ${k + 1}`);
      b.onclick = () => go(k);
      dotsWrap.appendChild(b); return b;
    });
    const schedule = () => {
      clearTimeout(timer);
      car.classList.toggle('paused', holds.size > 0 || !autoplay);
      if (autoplay && holds.size === 0) timer = setTimeout(() => go(i + 1), DELAY);
    };
    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => { s.classList.toggle('active', k === i); s.setAttribute('aria-hidden', k !== i); s.inert = k !== i; });
      dots.forEach((d, k) => { d.classList.remove('active'); d.setAttribute('aria-current', k === i); if (k === i) { void d.offsetWidth; d.classList.add('active'); } });
      schedule();
    }
    const hold = (key, on) => { if (on) holds.add(key); else holds.delete(key); if (on) clearTimeout(timer); else go(i); };
    car.querySelector('.prev').onclick = () => go(i - 1);
    car.querySelector('.next').onclick = () => go(i + 1);
    car.addEventListener('mouseenter', () => hold('hover', true));
    car.addEventListener('mouseleave', () => hold('hover', false));
    car.addEventListener('focusin', () => hold('focus', true));
    car.addEventListener('focusout', e => { if (!car.contains(e.relatedTarget)) hold('focus', false); });
    document.addEventListener('visibilitychange', () => hold('hidden', document.hidden));
    new IntersectionObserver(([e]) => { if (e.isIntersecting === holds.has('offscreen')) hold('offscreen', !e.isIntersecting); }).observe(car);
    go(0);
    // Entrada de la primera carga: dos frames para que el estado inicial se pinte antes de transicionar
    // (con respaldo por temporizador: rAF no corre en pestañas ocultas y el texto no debe quedar invisible)
    const ready = () => car.classList.add('ready');
    requestAnimationFrame(() => requestAnimationFrame(ready));
    setTimeout(ready, 150);
  }

  /* ---------- Reveal on scroll (una sola vez, cascada máx. 4 pasos) ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('in');
    io.unobserve(el);
    // Al terminar, se retira .reveal para que el elemento recupere sus propias transiciones (hover de tarjetas)
    const done = ev => {
      if (ev.target !== el || ev.propertyName !== 'transform') return;
      el.removeEventListener('transitionend', done);
      el.classList.remove('reveal', 'in');
      el.style.transitionDelay = '';
    };
    el.addEventListener('transitionend', done);
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => {
    const sib = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    el.style.transitionDelay = Math.min(sib.indexOf(el), 4) * 60 + 'ms';
    if (reduce) { el.classList.remove('reveal'); return; }
    io.observe(el);
  });

  /* ---------- Count-up (arranca desde 0 solo si se va a animar) ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if (!reduce) {
    const fmt = n => n.toLocaleString('en-US');
    counters.forEach(el => { el.textContent = '0'; });
    const cio = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.count, t0 = performance.now(), dur = 1600;
      const easeOutExpo = p => (p === 1 ? 1 : 1 - Math.pow(2, -10 * p));
      const tick = t => {
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = fmt(Math.round(end * easeOutExpo(p)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      cio.unobserve(el);
    }), { threshold: .6 });
    counters.forEach(el => cio.observe(el));
  }

  /* ---------- Sub-navigation: scrollspy + indicador que se desliza ---------- */
  const sub = document.querySelector('.subnav');
  if (sub) {
    const wrap = sub.querySelector('.wrap');
    const links = [...wrap.querySelectorAll('a')];
    const targets = links.map(a => document.querySelector(a.getAttribute('href')));
    const ind = document.createElement('span');
    ind.className = 'subnav-ind';
    wrap.appendChild(ind);
    sub.classList.add('has-ind');
    let current = -1;
    const place = (idx, instant) => {
      const a = links[idx];
      if (instant) ind.style.transition = 'none';
      ind.style.transform = `translateX(${a.offsetLeft}px) scaleX(${a.offsetWidth / 100})`;
      if (instant) { void ind.offsetWidth; ind.style.transition = ''; }
    };
    const spy = () => {
      let idx = 0;
      targets.forEach((t, k) => { if (t && t.getBoundingClientRect().top < 180) idx = k; });
      if (idx === current) return;
      const first = current === -1;
      current = idx;
      links.forEach((a, k) => a.classList.toggle('on', k === idx));
      place(idx, first);
      // En celular, mantiene visible la pestaña activa dentro de la barra desplazable
      const a = links[idx];
      if (a.offsetLeft < wrap.scrollLeft || a.offsetLeft + a.offsetWidth > wrap.scrollLeft + wrap.clientWidth)
        wrap.scrollTo({ left: a.offsetLeft - 16, behavior: reduce ? 'auto' : 'smooth' });
    };
    addEventListener('scroll', spy, { passive: true });
    addEventListener('resize', () => current > -1 && place(current, true));
    document.fonts && document.fonts.ready.then(() => current > -1 && place(current, true));
    spy();
  }

  /* ---------- Acordeones FAQ: altura medida + opacidad, 220 ms ease-out ---------- */
  document.querySelectorAll('.faq details').forEach(d => {
    const summary = d.querySelector('summary');
    const body = d.querySelector('.ans');
    let anim = null;
    summary.addEventListener('click', e => {
      if (reduce || !body) return;          // comportamiento nativo sin animación
      e.preventDefault();
      const opening = !d.open || d.dataset.closing === '1';
      const from = body.getBoundingClientRect().height;
      if (anim) anim.cancel();
      if (opening) {
        d.dataset.closing = '';
        d.open = true;
        const pmo = d.querySelector('.pm'); if (pmo) pmo.style.transform = '';
        const to = body.scrollHeight;
        anim = body.animate(
          [{ height: `${from}px`, opacity: from ? 1 : 0 }, { height: `${to}px`, opacity: 1 }],
          { duration: 220, easing: EASE_OUT }
        );
      } else {
        d.dataset.closing = '1';
        anim = body.animate(
          [{ height: `${from}px`, opacity: 1 }, { height: '0px', opacity: 0 }],
          { duration: 180, easing: EASE_OUT }
        );
        d.querySelector('.pm') && (d.querySelector('.pm').style.transform = 'none');
      }
      anim.onfinish = () => {
        if (d.dataset.closing === '1') { d.open = false; d.dataset.closing = ''; }
        const pm = d.querySelector('.pm'); if (pm) pm.style.transform = '';
        anim = null;
      };
    });
  });

  /* ---------- Lead forms ---------- */
  const perfil = new URLSearchParams(location.search).get('perfil');
  document.querySelectorAll('form.lead').forEach(form => {
    if (perfil) { const r = form.querySelector(`input[name=perfil][value="${perfil}"]`); if (r) r.checked = true; }
    form.addEventListener('submit', e => {
      e.preventDefault();
      const bad = [...form.querySelectorAll('[required]')].find(f => !f.checkValidity());
      if (bad) { bad.reportValidity(); return; }
      form.classList.add('sent');
    });
  });
  document.querySelectorAll('[data-profile]').forEach(a => a.addEventListener('click', () => {
    const r = document.querySelector(`input[name=perfil][value="${a.dataset.profile}"]`); if (r) r.checked = true;
  }));

  /* ---------- Blog filters ---------- */
  document.querySelectorAll('.filters').forEach(bar => {
    const posts = [...document.querySelectorAll(bar.dataset.target)];
    bar.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      bar.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
      let k = 0;
      posts.forEach(p => {
        const show = b.dataset.cat === 'all' || p.dataset.cat === b.dataset.cat;
        p.classList.toggle('hide', !show);
        if (show && !reduce) p.animate(
          [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }],
          { duration: 300, delay: Math.min(k++, 5) * 40, easing: EASE_OUT, fill: 'backwards' }
        );
      });
    });
  });

  /* ---------- Help search ---------- */
  const q = document.getElementById('helpSearch');
  if (q) {
    const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const blocks = [...document.querySelectorAll('.faq-block')];
    const none = document.getElementById('noResults');
    q.addEventListener('input', () => {
      const term = norm(q.value.trim());
      let total = 0;
      blocks.forEach(b => {
        let n = 0;
        b.querySelectorAll('details').forEach(d => {
          const hit = !term || norm(d.textContent).includes(term);
          d.classList.toggle('hide', !hit);
          if (hit) { n++; if (term) d.open = true; }
        });
        b.classList.toggle('hide', n === 0); total += n;
      });
      none.style.display = total ? 'none' : 'block';
    });
  }

  /* ---------- Simple demo forms (newsletter, login) ---------- */
  document.querySelectorAll('form.demo').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const msg = f.querySelector('.demo-msg'); if (msg) msg.hidden = false;
  }));
})();
