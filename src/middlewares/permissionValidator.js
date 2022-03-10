const hasPermission = (arr1, arr2) => arr1.some((el) => arr2.includes(el));

const permissionValidator = (allowedPermissions) => (req, res, next) => {
	const permissions = req?.user?.permissions || [];

	// if (false) {
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
