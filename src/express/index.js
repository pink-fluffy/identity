export default function makeExpressCallback(controller) {
	return (req, res) => {
		controller(req)
			.then((serviceResponse) => {
				res.type('json').status(serviceResponse.status).send(serviceResponse.body);
				//res.type('json').status(200).send(serviceResponse.body);
			})
			.catch((e) => res.status(500).send({ error: `An unknown error occurred.\n ${e}` }));
	};
}
