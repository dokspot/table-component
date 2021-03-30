/* eslint-disable react/display-name */
import React, { forwardRef, useRef, useEffect } from 'react'

export default forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef

    useEffect(() => {
      if (
        resolvedRef !== undefined &&
        resolvedRef.current !== undefined &&
        resolvedRef.current !== null
      ) {
        resolvedRef.current.indeterminate = indeterminate
      }
    }, [resolvedRef, indeterminate])

    return (<input type="checkbox" ref={resolvedRef} {...rest} />)
  }
)