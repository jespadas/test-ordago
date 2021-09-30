import axios from 'axios';

export const getUsers = async () => {
	try {
		const url = `https://randomuser.me/api/?results=25`;
		const resp = await axios.get(url);
        const data = resp.data.results;

		let users = [];
        // eslint-disable-next-line
		 data.map((user, index) => {
            users = [
                ...users,
                {
                    id: index + 1,
                    lastName: user.name.last,
                    firstName: user.name.first,
                    age: user.dob.age,
                    email: user.email,
                    address: user.location.city,
                    country: user.location.country,
                    phone: user.phone,
                    avatar: user.picture.medium,
                },
            ];
        });
		
        return users;
	} catch (error) {
		console.log(error);
	}
};
