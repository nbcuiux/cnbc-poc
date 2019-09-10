import {
	USER_ROLE_HOTSEAT,
	USER_ROLE_NEWSASSOCIATE,
	USER_ROLE_REPORTER,
	USER_ROLE_COPYEDITOR,
	USER_ROLE_EDITOR,
	USER_ROLE_VIDEOPRODUCER,
	USER_ROLE_PHOTODESK,
	USER_ROLE_SITEPRODUCER,
	USER_ROLE_SOCIAL
} from "../constants";

export function getRoleConfig(role) {
	switch (role) {
		case USER_ROLE_HOTSEAT: {
			return {
				label: "Hot Seat"
			}
		}

		case USER_ROLE_NEWSASSOCIATE: {
			return {
				label: "News Associate"
			}
		}

		case USER_ROLE_REPORTER: {
			return {
				label: "Reporter"
			}
		}

		case USER_ROLE_COPYEDITOR: {
			return {
				label: "Copy Editor"
			}
		}

		case USER_ROLE_EDITOR: {
			return {
				label: "Video Edtior"
			}
		}

		case USER_ROLE_VIDEOPRODUCER: {
			return {
				label: "Video Producer"
			}
		}

		case USER_ROLE_PHOTODESK: {
			return {
				label: "Photo Desk"
			}
		}

		case USER_ROLE_SITEPRODUCER: {
			return {
				label: "Site Producer"
			}
		}

		case USER_ROLE_SOCIAL: {
			return {
				label: "Social"
			}
		}

		case "USER_ROLE_MVP": {
			return {
				label: "MVP User"
			}
		}

		default: {
			throw ("No role found for " + role );
		}
	}
}
