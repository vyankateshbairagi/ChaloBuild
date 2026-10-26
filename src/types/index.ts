/**
 * ChaloBuild Platform - Shared Domain Types
 * Enterprise-grade TypeScript definitions for authentication, navigation, and API contracts.
 */

import type { LucideIcon } from "lucide-react";

// User & Authentication Roles
export type UserRole = "OWNER" | "STAFF";

export interface CurrentUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organizationId: string;
  organization?: {
    id: string;
    name: string;
    currency: string;
    timezone: string;
    phone?: string | null;
  };
}

// Navigation & Layout
export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  roles?: UserRole[];
  badge?: string;
}

// Standard API Response Envelope
export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

// Pagination & Query Parameters
export interface PaginationParams {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: string;
  date?: string;
  range?: string;
}

// Financial Transaction Statuses
export type PaymentMethod =
  | "CASH"
  | "UPI"
  | "CARD"
  | "BANK_TRANSFER"
  | "CHEQUE"
  | "ONLINE"
  | "OTHER";

export type PaymentStatus =
  | "PENDING"
  | "FAILED"
  | "COMPLETED"
  | "REFUNDED"
  | "PARTIALLY_REFUNDED"
  | "VOIDED";

export type MembershipStatus = "ACTIVE" | "EXPIRED" | "CANCELLED" | "PENDING";

// Dashboard Stat Card Variant
export type StatTone = "default" | "positive" | "warning";

export interface StatTileData {
  label: string;
  value: string | number;
  tone?: StatTone;
  trend?: string;
  icon?: LucideIcon;
}
