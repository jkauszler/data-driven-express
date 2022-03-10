const hasPermission = (arr1, arr2) => arr1.some((el) => arr2.includes(el));

const permissionValidator = (allowedPermissions) => (req, res, next) => {
	const permissions = req?.user?.permissions || [];

	console.log(allowedPermissions.length === 0);

	// bail out if no permissions passed
	if (allowedPermissions.length === 0) { next(); return; }

	if (!hasPermission(permissions, allowedPermissions)) {
		res.status(401).json({
			statusCode: 401,
			error: 'MISSING_PERMISSION',
			message: 'NOT AUTHORIZED',
		});
	} else {
		next();
	}
};

module.exports = permissionValidator;
