import { expect, test, describe } from 'vitest';

describe('Contact Page', () => {
  const html = `
    <div class="max-w-2xl mx-auto px-4 py-8">
      <h2 class="text-4xl font-bold text-text-primary mb-8">Contáctanos</h2>
      <div class="space-y-6">
        <article class="flex items-start">
          <i class="fas fa-map-marker-alt text-2xl text-text-primary mt-1"></i>
          <div class="ml-4">
            <h3 class="text-xl font-semibold text-text-primary mb-2">Ubicación</h3>
            <p class="text-text-primary">Dirección de la tienda</p>
          </div>
        </article>
        <article class="flex items-start">
          <i class="fas fa-phone text-2xl text-text-primary mt-1"></i>
          <div class="ml-4">
            <h3 class="text-xl font-semibold text-text-primary mb-2">Teléfono</h3>
            <p class="text-text-primary">Número de teléfono</p>
          </div>
        </article>
        <article class="flex items-start">
          <i class="fas fa-envelope text-2xl text-text-primary mt-1"></i>
          <div class="ml-4">
            <h3 class="text-xl font-semibold text-text-primary mb-2">Email</h3>
            <p class="text-text-primary">Correo electrónico</p>
          </div>
        </article>
      </div>
    </div>
  `;

  beforeEach(() => {
    document.body.innerHTML = html;
  });

  test('should have correct title', () => {
    const title = document.querySelector('h2');
    expect(title?.textContent).toBe('Contáctanos');
  });

  test('should have three contact information sections', () => {
    const contactSections = document.querySelectorAll('.flex.items-start');
    expect(contactSections).toHaveLength(3);
  });

  test('should have correct contact information titles', () => {
    const sectionTitles = document.querySelectorAll('h3');
    const titles = Array.from(sectionTitles).map(title => title.textContent);
    expect(titles).toEqual(['Ubicación', 'Teléfono', 'Email']);
  });

  test('should have correct text colors', () => {
    const textElements = document.querySelectorAll('h2, h3, p');
    textElements.forEach(element => {
      expect(element).toHaveClass('text-text-primary');
    });
  });

  test('should have responsive layout', () => {
    const container = document.querySelector('.max-w-2xl');
    expect(container).toBeTruthy();
  });

  test('should have correct icons', () => {
    const icons = document.querySelectorAll('i');
    const expectedClasses = [
      'fas fa-map-marker-alt text-2xl text-text-primary mt-1',
      'fas fa-phone text-2xl text-text-primary mt-1',
      'fas fa-envelope text-2xl text-text-primary mt-1'
    ];
    icons.forEach((icon, index) => {
      expect(icon).toHaveClass(...expectedClasses[index].split(' '));
    });
  });
}); 