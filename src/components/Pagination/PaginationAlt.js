import React from 'react'
import PaginationButton from './PaginationButton'
import { MoreHoriz } from '@styled-icons/material'
import { Button } from 'react-bootstrap'

export default function PaginationAlt({
  gotoPage,
  pageIndex,
  pageCount
}) {
  return (
    <>
      <PaginationButton pageIndex={pageIndex} gotoPage={gotoPage} pageNumber={0} />
      { (pageIndex - 2) > 0 ? <Button variant='white' disabled><MoreHoriz size={16} /></Button> : <></> }
      <PaginationButton pageIndex={pageIndex} gotoPage={gotoPage} pageNumber={pageIndex - 1} />
      <PaginationButton pageIndex={pageIndex} gotoPage={gotoPage} pageNumber={pageIndex} />
      <PaginationButton pageIndex={pageIndex} gotoPage={gotoPage} pageNumber={pageIndex + 1} />
      { (pageIndex + 2) < (pageCount - 1) ? <Button variant='white' disabled><MoreHoriz size={16} /></Button> : <></> }
      <PaginationButton pageIndex={pageIndex} gotoPage={gotoPage} pageNumber={pageCount - 1} />
    </>
  )
}