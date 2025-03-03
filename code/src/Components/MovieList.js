import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MovieList = ({ movieList }) => {
	const [filteredMovieList, setfilteredMovieList] = useState(movieList)
	const [filter, setFilter] = useState()
	const [sorting, setSorting] = useState()

	// ADDED second useEffect to filter movies based on genre
	useEffect(() => {
		if (filter === 'All') {
			setfilteredMovieList(movieList)
		} else if (filter === 'Action') {
			const filteredList = [...movieList]
			if (sorting === 'relesead') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(28))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(28))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Adventure') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(12))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(12))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Animation') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(16))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(16))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Comedy') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(35))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(35))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Crime') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(80))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(80))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Documentary') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(99))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(99))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Drama') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(18))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(18))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Family') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(10751))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(10751))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Fantasy') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(14))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(14))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'History') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(36))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(36))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Horror') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(27))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(27))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Music') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(10402))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(10402))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Mystery') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(9648))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(9648))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Romance') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(10749))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(10749))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'SciFi') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(878))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(878))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'TVmovie') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(10770))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(10770))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Thriller') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(53))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(53))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'War') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(10752))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(10752))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		} else if (filter === 'Western') {
			const filteredList = [...movieList]
			if (sorting === 'released') {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(37))
						.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
				)
			} else {
				setfilteredMovieList(
					filteredList
						.filter((movie) => movie.genre_ids.includes(37))
						.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
				)
			}
		}
	}, [filter])

	useEffect(() => {
		if (sorting === 'popularity') {
			const sortedMovieList = [...filteredMovieList]
			setfilteredMovieList(
				sortedMovieList.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
			)
		} else if (sorting === 'released') {
			const sortedMovieList = [...filteredMovieList]
			setfilteredMovieList(
				sortedMovieList.sort((a, b) =>
					a.release_date < b.release_date ? 1 : -1
				)
			)
		}
	}, [sorting])

	return (
		<main>
			<div className='filter-sorting-bar'>
				{/* ADDED options to choose to filter based on genre */}
				<label htmlFor='filter'>
					<select
						id='filter'
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
					>
						{' '}
						<option selected={true} disabled='disabled'>
							CHOOSE GENRE &#9660;
						</option>
						<option value='All'>All</option>
						<option value='Action'>Action</option>
						<option value='Adventure'>Adventure</option>
						<option value='Animation'>Animation</option>
						<option value='Comedy'>Comedy</option>
						<option value='Crime'>Crime</option>
						<option value='Documentary'>Documentary</option>
						<option value='Drama'>Drama</option>
						<option value='Family'>Family</option>
						<option value='Fantasy'>Fantasy</option>
						<option value='History'>History</option>
						<option value='Horror'>Horror</option>
						<option value='Music'>Music</option>
						<option value='Mystery'>Mystery</option>
						<option value='Romance'>Romance</option>
						<option value='SciFi'>Science Fiction</option>
						<option value='TVmovie'>TV movie</option>
						<option value='Thriller'>Thriller</option>
						<option value='War'>War</option>
						<option value='Western'>Western</option>
					</select>
				</label>
				<label htmlFor='sorting'>
					<select
						id='sorting'
						value={sorting}
						onChange={(e) => setSorting(e.target.value)}
					>
						<option selected='true' disabled='disabled'>
							SORT MOVIES &#9660;
						</option>
						<option value='popularity'>most popular</option>
						<option value='released'>recently released</option>
					</select>
				</label>
			</div>
			<section className='main'>
				{filteredMovieList.map((movie) => (
					<Link
						to={`/details/${movie.id}`}
						className='movie-wrapper'
						key={movie.id}
					>
						<div className='movie'>
							<img
								className='poster-img'
								src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
								alt='movie poster'
							/>
						</div>
						<div className='overlay'>
							<h2>{movie.title}</h2>
							<p>Released {movie.release_date}</p>
						</div>
					</Link>
				))}
			</section>
		</main>
	)
}
