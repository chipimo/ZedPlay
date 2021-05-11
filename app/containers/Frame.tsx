import React from 'react'
import { connect } from 'react-redux'

type Props = {}

 const Frame = (Props) => {
  return (
    <div>
{children}
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Frame)

