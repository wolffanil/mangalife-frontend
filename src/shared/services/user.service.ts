import { getUserUrl } from '../config/api.config'
import { TEditProfileEdit } from '../schemas/profile/edit-profile'
import { IUser } from '../types/user.interface'

import { axiosWithAuth } from './api/interceptors.api'

export const UserService = {
	async updateProfile(data: TEditProfileEdit) {
		const res = await axiosWithAuth<{ user: IUser }>({
			url: getUserUrl('/update-profile'),
			data,
			method: 'PATCH'
		})

		return res.data?.user
	}
}
