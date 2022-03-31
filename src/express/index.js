export default function makeExpressCallback(controller) {
	return (req, res) => {
		controller(req.body)
			.then((serviceResponse) => {
				res.type('json').status(serviceResponse.status).send(serviceResponse.body);
			})
			.catch((e) => res.status(500).send({ error: 'An unknown error occurred.' }));
	};
}
