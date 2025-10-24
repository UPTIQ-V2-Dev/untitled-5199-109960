import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('Utils', () => {
    describe('cn', () => {
        it('should merge class names correctly', () => {
            const result = cn('base-class', 'additional-class');
            expect(result).toContain('base-class');
            expect(result).toContain('additional-class');
        });

        it('should handle conditional classes', () => {
            const isActive = true;
            const result = cn('base', isActive && 'active');
            expect(result).toContain('base');
            expect(result).toContain('active');
        });

        it('should filter out falsy values', () => {
            const isHidden = false;
            const result = cn('base', isHidden && 'hidden', null, undefined, 'visible');
            expect(result).toContain('base');
            expect(result).toContain('visible');
            expect(result).not.toContain('hidden');
        });
    });
});
