import React, { use, useState } from 'react'
import styles from './Paginator.module.css'
import cn from 'classnames'

let Paginator = ({
	totalItemsCount,
	pageSize,
	currentPage,
	onPageChanged,
	portionSize = 10,
}) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize)

	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	let portionCount = Math.ceil(pagesCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionPageNumber = portionNumber * portionSize

	return (
		<div className={styles.paginator}>
			{portionNumber > 1 && (
				<button
					className={styles.nextButton}
					onClick={() => {
						setPortionNumber(portionNumber - 1)
					}}
				>
					PREV
				</button>
			)}

			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map(p => {
					return (
						<button
							className={cn(
								{
									[styles.selectedPage]: currentPage === p,
								},
								styles.pageNumber
							)}
							key={p}
							onClick={e => {
								onPageChanged(p)
							}}
						>
							{p}
						</button>
					)
				})}
			{portionCount > portionNumber && (
				<button
					className={styles.nextButton}
					onClick={() => {
						setPortionNumber(portionNumber + 1)
					}}
				>
					NEXT
				</button>
			)}
		</div>
	)
}

export default Paginator
