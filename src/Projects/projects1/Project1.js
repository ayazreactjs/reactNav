const Project1 = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <p style={{ textAlign: 'justify', width: '320px' }}>
        This is a simple responsive navbar built with React.js and styled with
        Sass. To create the flexbox layout, Sass mixins were used, as well as
        Sass variables to define common styles. The navbar features a hamburger
        menu icon that toggles the display of the navigation links. When a link
        is clicked, the navbar will automatically close, achieved by adding an
        onClick function to each link. Additionally, the navbar will close if
        the user clicks outside of the nav element. This was achieved using the
        useEffect and useRef hooks to detect clicks outside of the nav element
        in responsive screens. Overall, this navbar provides a clean and
        user-friendly navigation experience for users on any device.
      </p>
    </div>
  )
}
export default Project1
