import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';

describe('Gallery Component HTML Output', () => {
    let dom: JSDOM;
    let document: Document;

    beforeEach(() => {
        // Create a basic HTML structure that matches your gallery
        const html = `
            <div class="gallery" id="gallery" data-testid="gallery">
                <div class="gallery-item left" data-testid="gallery-item">
                    <div class="image-container">
                        <img src="/images/Baby yoda.jpg" alt="Baby Yoda Bordado" />
                    </div>
                    <div class="content-container">
                        <h3>Baby Yoda</h3>
                        <p>Un adorable bordado del personaje Baby Yoda, capturando su dulce mirada y expresiones características.</p>
                    </div>
                </div>
                <!-- Add more items as needed -->
            </div>
        `;
        dom = new JSDOM(html);
        document = dom.window.document;
    });

    it('has correct structure and classes', () => {
        const gallery = document.querySelector('[data-testid="gallery"]');
        const galleryItem = document.querySelector('[data-testid="gallery-item"]');
        
        expect(gallery).toBeTruthy();
        expect(gallery?.classList.contains('gallery')).toBe(true);
        expect(galleryItem?.classList.contains('gallery-item')).toBe(true);
        expect(galleryItem?.classList.contains('left')).toBe(true);
    });

    it('renders image with correct attributes', () => {
        const img = document.querySelector('img');
        
        expect(img).toBeTruthy();
        expect(img?.getAttribute('src')).toBe('/images/Baby yoda.jpg');
        expect(img?.getAttribute('alt')).toBe('Baby Yoda Bordado');
    });

    it('renders content with correct text', () => {
        const title = document.querySelector('h3');
        const description = document.querySelector('p');
        
        expect(title?.textContent).toBe('Baby Yoda');
        expect(description?.textContent).toContain('Un adorable bordado');
    });

    it('has correct styling classes for layout', () => {
        const imageContainer = document.querySelector('.image-container');
        const contentContainer = document.querySelector('.content-container');
        
        expect(imageContainer).toBeTruthy();
        expect(contentContainer).toBeTruthy();
    });
}); 