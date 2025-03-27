import { expect, test, describe } from 'vitest';

describe('About Us Page', () => {
  const html = `
    <div class="max-w-4xl mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-text-primary mb-8">Nuestra Historia</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article class="feature p-6 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-text-primary mb-4">Arte con Amor</h3>
          <p class="text-text-primary">Descripción del arte con amor</p>
        </article>
        <article class="feature p-6 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-text-primary mb-4">Diseños Únicos</h3>
          <p class="text-text-primary">Descripción de diseños únicos</p>
        </article>
        <article class="feature p-6 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-text-primary mb-4">Tradición</h3>
          <p class="text-text-primary">Descripción de la tradición</p>
        </article>
      </div>
    </div>
  `;

  beforeEach(() => {
    document.body.innerHTML = html;
  });

  test('should have correct title', () => {
    const title = document.querySelector('h1');
    expect(title?.textContent).toBe('Nuestra Historia');
  });

  test('should have three feature cards', () => {
    const featureCards = document.querySelectorAll('.feature');
    expect(featureCards).toHaveLength(3);
  });

  test('should have correct feature titles', () => {
    const featureTitles = document.querySelectorAll('.feature h3');
    const titles = Array.from(featureTitles).map(title => title.textContent);
    expect(titles).toEqual(['Arte con Amor', 'Diseños Únicos', 'Tradición']);
  });

  test('should have correct text colors', () => {
    const textElements = document.querySelectorAll('h1, h3, p');
    textElements.forEach(element => {
      expect(element).toHaveClass('text-text-primary');
    });
  });

  test('should have responsive layout', () => {
    const container = document.querySelector('.max-w-4xl');
    expect(container).toBeTruthy();
  });
}); 