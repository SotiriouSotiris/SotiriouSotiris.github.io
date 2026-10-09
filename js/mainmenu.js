(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.nav');
  const menuButton = document.querySelector('.menu-toggle');

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const closeMenu = () => {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('menu-open');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    if (isOpen) return closeMenu();
    nav.classList.add('is-open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close menu');
    document.body.classList.add('menu-open');
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.querySelector('[data-back-top]')?.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });

  const revealItems = document.querySelectorAll('.reveal');
  if (reducedMotion) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      const bounds = item.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 1.08 && bounds.bottom > 0) {
        item.classList.add('is-visible');
      } else {
        revealObserver.observe(item);
      }
    });
    document.documentElement.classList.add('motion-ready');
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...nav.querySelectorAll('a')];
  const updateNavigation = () => {
    header.classList.toggle('scrolled', window.scrollY > 35);
    let current = '';
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 240) current = section.id;
    });
    navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${current}`));
  };
  updateNavigation();
  window.addEventListener('scroll', updateNavigation, { passive: true });

  const dialog = document.querySelector('#degree-dialog');
  document.querySelector('[data-dialog-open]').addEventListener('click', () => {
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
  const closeDialog = () => {
    dialog.close();
    document.body.classList.remove('dialog-open');
  };
  dialog.querySelector('[data-dialog-close]').addEventListener('click', closeDialog);
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) closeDialog();
  });
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

  const consoleCommands = {
    now: {
      prompt: 'status --current',
      output: [
        '> role.01      Co-founder & Founding Engineer @ ODO',
        '> role.02      Mid Full-Stack Software Engineer @ Factory39',
        '> location     Limassol, Cyprus',
        '> focus        product delivery / architecture / operations',
        '',
        '[ok] building across web, iOS, and Android'
      ]
    },
    architecture: {
      prompt: 'inspect odo --architecture',
      output: [
        '> clients      responsive web / iOS / Android',
        '> product      Ruby on Rails + Hotwire Native',
        '> data         PostgreSQL / background processing / caching',
        '> billing      Stripe / Apple / Google Play',
        '> operations   GitHub Actions / Railway / Sentry',
        '',
        '[ok] one product architecture, multiple surfaces'
      ]
    },
    'open-source': {
      prompt: 'ls --open-source',
      output: [
        '> cv_agent_builder/',
        '  evidence-first toolkit for reproducible CV generation',
        '> frozen_string_literal_ruby/',
        '  focused Ruby workflow automation for VS Code',
        '> init_mate/',
        '  Ruby initializer assistant written in TypeScript',
        '',
        '[ok] public tools, practical problems'
      ]
    },
    principles: {
      prompt: 'cat engineering-principles.md',
      output: [
        '01  Understand the product before shaping the abstraction.',
        '02  Make the system clear before making it clever.',
        '03  Treat tests, monitoring, and support as product work.',
        '04  Own the result beyond the merge button.',
        '05  Leave the codebase easier for the next engineer.',
        '',
        '[ok] make it work, make it clear, make it last'
      ]
    }
  };

  const consoleButtons = [...document.querySelectorAll('[data-console-command]')];
  const consoleOutput = document.querySelector('[data-console-output]');
  const consolePrompt = document.querySelector('[data-console-prompt]');
  const sessionId = document.querySelector('[data-session-id]');
  if (sessionId) sessionId.textContent = Math.random().toString(16).slice(2, 6).toUpperCase();

  const renderConsole = (commandName) => {
    const command = consoleCommands[commandName];
    if (!command || !consoleOutput || !consolePrompt) return;
    consolePrompt.textContent = command.prompt;
    const content = command.output.join('\n');
    consoleOutput.classList.remove('is-typing');
    consoleOutput.textContent = content;
    if (reducedMotion) {
      return;
    }
    void consoleOutput.offsetWidth;
    consoleOutput.classList.add('is-typing');
  };

  consoleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      consoleButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });
      renderConsole(button.dataset.consoleCommand);
    });
  });
  renderConsole('now');

  if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
    const cursor = document.querySelector('.cursor-dot');
    let cursorX = -50;
    let cursorY = -50;
    let targetX = -50;
    let targetY = -50;
    window.addEventListener('mousemove', (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.style.opacity = '1';
    });
    const drawCursor = () => {
      cursorX += (targetX - cursorX) * .18;
      cursorY += (targetY - cursorY) * .18;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
      requestAnimationFrame(drawCursor);
    };
    drawCursor();
    document.querySelectorAll('a, button, [data-tilt]').forEach((item) => {
      item.addEventListener('mouseenter', () => cursor.classList.add('is-active'));
      item.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
    });

    document.querySelectorAll('[data-tilt]').forEach((item) => {
      const target = item.querySelector('.portrait-frame, .about-image-wrap');
      item.addEventListener('mousemove', (event) => {
        const rect = item.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        target.style.transform = `rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
      });
      item.addEventListener('mouseleave', () => { target.style.transform = ''; });
    });

    document.querySelectorAll('.magnetic').forEach((item) => {
      item.addEventListener('mousemove', (event) => {
        const rect = item.getBoundingClientRect();
        item.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * .08}px, ${(event.clientY - rect.top - rect.height / 2) * .1}px)`;
      });
      item.addEventListener('mouseleave', () => { item.style.transform = ''; });
    });
  }

  const canvas = document.querySelector('#field');
  const context = canvas.getContext('2d');
  let particles = [];
  let pointer = { x: -1000, y: -1000 };
  let frameId;

  const resizeCanvas = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.min(80, Math.floor(window.innerWidth / 20));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - .5) * .16,
      vy: (Math.random() - .5) * .16,
      radius: Math.random() * 1.1 + .3
    }));
  };

  const drawField = () => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
      if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = 'rgba(92,225,230,.38)';
      context.fill();
      for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex++) {
        const other = particles[otherIndex];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 105) {
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(92,225,230,${(1 - distance / 105) * .09})`;
          context.stroke();
        }
      }
      const pointerDistance = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
      if (pointerDistance < 150) {
        context.beginPath();
        context.moveTo(particle.x, particle.y);
        context.lineTo(pointer.x, pointer.y);
        context.strokeStyle = `rgba(216,255,95,${(1 - pointerDistance / 150) * .2})`;
        context.stroke();
      }
    });
    frameId = requestAnimationFrame(drawField);
  };

  resizeCanvas();
  if (!reducedMotion) drawField();
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', (event) => { pointer = { x: event.clientX, y: event.clientY }; }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(frameId);
    else if (!reducedMotion) drawField();
  });
})();
