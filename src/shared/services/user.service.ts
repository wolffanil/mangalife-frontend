import { getUserUrl } from '../config/api.config'
import { TEditProfileEdit } from '../schemas/profile/edit-profile'
import { IUser, IUserBan } from '../types/user.interface'

import { axiosWithAuth } from './api/interceptors.api'

export const UserService = {
	async updateProfile(data: TEditProfileEdit) {
		const res = await axiosWithAuth<{ user: IUser }>({
			url: getUserUrl('/update-profile'),
			data,
			method: 'PATCH'
		})

		return res.data?.user
	},

	async setBan(userId: string, reasonId: string) {
		const res = await axiosWithAuth<{ user: IUser }>({
			url: getUserUrl(`/set-ban/${userId}`),
			method: 'PATCH',
			data: {
				reasonId
			}
		})

		return res.data.user
	},

	async setUnBan(userId: string) {
		const res = await axiosWithAuth<{ user: IUser }>({
			url: getUserUrl(`/set-unban/${userId}`),
			method: 'PATCH'
		})

		return res.data.user
	},

	async getAllBan() {
		const res = await axiosWithAuth<{ users: IUserBan[] }>({
			url: getUserUrl('/get-bans'),
			method: 'GET'
		})

		return res.data.users
	}
}
