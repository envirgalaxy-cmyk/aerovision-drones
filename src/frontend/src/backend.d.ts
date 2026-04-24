import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    id: bigint;
    title: string;
    features: Array<string>;
    icon: string;
    slug: string;
    description: string;
    benefits: Array<string>;
}
export interface Project {
    id: bigint;
    title: string;
    serviceType: string;
    description: string;
    results: string;
    clientIndustry: string;
    hasBeforeAfter: boolean;
    industry: string;
}
export interface CoverageZone {
    id: bigint;
    lat: number;
    lng: number;
    region: string;
    name: string;
    description: string;
}
export interface Industry {
    id: bigint;
    useCases: Array<string>;
    icon: string;
    name: string;
    slug: string;
    description: string;
    benefits: Array<string>;
}
export interface backendInterface {
    getAllIndustries(): Promise<Array<Industry>>;
    getAllProjects(): Promise<Array<Project>>;
    getAllServices(): Promise<Array<Service>>;
    getCoverageZones(): Promise<Array<CoverageZone>>;
}
