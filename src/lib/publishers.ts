/**
 * Publisher lookup helpers for the Tailspin Toys catalog.
 *
 * Keeps the app-facing publisher model separate from the Drizzle schema so
 * Astro pages can query a typed, deterministic subset of rows.
 */
import { asc } from 'drizzle-orm';
import { publishers } from '../../db/schema';
import type { Database } from './db';
import type { Publisher } from '../types/game';

/** All publishers ordered by name. */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
