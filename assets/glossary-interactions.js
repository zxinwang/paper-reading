/* Embedded in generated HTML. Pointer dragging + docking; no external runtime. */
(() => {
  document.querySelectorAll('[data-movable-glossary]').forEach(panel => {
    const handle = panel.querySelector('[data-glossary-handle]');
    const dock = panel.querySelector('[data-glossary-dock]');
    const reset = panel.querySelector('[data-glossary-reset]');
    if (!handle || !dock) return;
    const zh = document.documentElement.lang.toLowerCase().startsWith('zh');
    const dockLabel = zh ? '停靠侧栏' : 'Dock sidebar';
    const floatLabel = zh ? '切换浮窗' : 'Float panel';
    let drag = null;
    const clamp = (n, a, b) => Math.max(a, Math.min(n, Math.max(a, b)));
    // Activate touch controls on pointerup: compatibility clicks may be suppressed
    // after a captured drag. Ignore duplicate touch clicks; keep keyboard clicks.
    function activate(button, action) {
      if (!button) return;
      let lastTouch = -Infinity;
      button.addEventListener('pointerup', event => {
        if (event.pointerType !== 'touch') return;
        const box = button.getBoundingClientRect();
        if (event.clientX < box.left || event.clientX > box.right ||
            event.clientY < box.top || event.clientY > box.bottom) return;
        lastTouch = performance.now(); event.preventDefault(); action();
      });
      button.addEventListener('click', event => {
        const recent = performance.now() - lastTouch < 700;
        if (recent && (event.pointerType === 'touch' ||
            (!('pointerType' in event) && event.detail > 0))) return;
        action();
      });
    }
    function place(x, y) {
      panel.dataset.mode = 'floating';
      const box = panel.getBoundingClientRect();
      panel.style.setProperty('left', clamp(x, 8, innerWidth - box.width - 8) + 'px', 'important');
      panel.style.setProperty('top', clamp(y, 8, innerHeight - box.height - 8) + 'px', 'important');
      panel.style.setProperty('right', 'auto', 'important'); panel.style.setProperty('bottom', 'auto', 'important');
      dock.textContent = dockLabel; dock.setAttribute('aria-pressed', 'false');
    }
    function defaultPosition() {
      panel.dataset.mode = 'floating';
      panel.style.left = ''; panel.style.top = ''; panel.style.right = ''; panel.style.bottom = '';
      dock.textContent = dockLabel; dock.setAttribute('aria-pressed', 'false');
    }
    activate(dock, () => {
      if (panel.dataset.mode === 'docked') { defaultPosition(); return; }
      panel.dataset.mode = 'docked';
      panel.style.left = ''; panel.style.top = ''; panel.style.right = ''; panel.style.bottom = '';
      dock.textContent = floatLabel; dock.setAttribute('aria-pressed', 'true');
    });
    activate(reset, defaultPosition);
    const close = panel.querySelector('[data-glossary-close], #glossary-close');
    close?.addEventListener('pointerup', event => {
      if (event.pointerType === 'touch') { event.preventDefault(); close.click(); }
    });
    handle.addEventListener('pointerdown', event => {
      if (event.button !== 0 || event.target.closest('button,input,a,select')) return;
      const rect = panel.getBoundingClientRect();
      // Convert docked panel to a floating panel before starting a drag.
      place(rect.left, rect.top);
      const floating = panel.getBoundingClientRect();
      drag = { id: event.pointerId, x: event.clientX, y: event.clientY,
               left: floating.left, top: floating.top };
      handle.setPointerCapture(event.pointerId);
      handle.classList.add('dragging'); event.preventDefault();
    });
    handle.addEventListener('pointermove', event => {
      if (!drag || drag.id !== event.pointerId) return;
      place(drag.left + event.clientX - drag.x, drag.top + event.clientY - drag.y);
    });
    function end(event) {
      if (!drag || event.pointerId !== drag.id) return;
      if (handle.hasPointerCapture(event.pointerId)) handle.releasePointerCapture(event.pointerId);
      drag = null; handle.classList.remove('dragging');
    }
    handle.addEventListener('pointerup', end); handle.addEventListener('pointercancel', end);
    handle.addEventListener('keydown', event => {
      const step = event.shiftKey ? 40 : 12;
      const deltas = { ArrowLeft: [-step,0], ArrowRight:[step,0], ArrowUp:[0,-step], ArrowDown:[0,step] };
      if (event.target !== handle) return;
      if (event.key === 'Home') { defaultPosition(); event.preventDefault(); return; }
      if (!deltas[event.key]) return;
      const rect = panel.getBoundingClientRect(), delta = deltas[event.key];
      place(rect.left + delta[0], rect.top + delta[1]); event.preventDefault();
    });
    addEventListener('resize', () => {
      if (panel.hidden || panel.dataset.mode === 'docked') return;
      const rect = panel.getBoundingClientRect(); place(rect.left, rect.top);
    });
    // A panel may be closed while the viewport changes (desktop -> mobile).
    // Re-clamp when opening so its remembered desktop coordinates remain usable.
    new MutationObserver(() => {
      if (panel.hidden || panel.dataset.mode === 'docked') return;
      requestAnimationFrame(() => {
        const rect = panel.getBoundingClientRect(); place(rect.left, rect.top);
      });
    }).observe(panel, {attributes:true, attributeFilter:['hidden']});
    defaultPosition();
  });
})();
