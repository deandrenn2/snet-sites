export interface NavItem {
	navItems: NavLink[];
}

export interface NavLink {
    link: {
        type: string;
        url?: string;
        label: string;
        reference?: NavReference;
    }
}

export interface NavReference {
	value: {
        slug: string
    };
	relationTo: string;
}
