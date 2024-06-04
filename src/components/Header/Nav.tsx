'use client'
import { memo } from 'react'
import Link from 'next/link'

export const Nav = memo(() => {
	return (
		<>
			<nav>
				<div className='flex flex-row items-center gap-5 mr-10'>
				</div>
			</nav>
		</>
	)
})
Nav.displayName = 'Nav'

const NavItem = memo(
	({
		href,
		linkText,
		key,
	}: {
		href: string
		linkText: string
		key?: number
	}) => {
		return (
			<>
				<Link key={key} href={href}>
					{linkText}
				</Link>
			</>
		)
	},
)
NavItem.displayName = 'NavItem'
