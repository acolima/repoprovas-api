import jwt from 'jsonwebtoken'

export function expiredTokenFactory() {
	return jwt.sign({}, process.env.JWT_SECRET, { expiresIn: 0 })
}
