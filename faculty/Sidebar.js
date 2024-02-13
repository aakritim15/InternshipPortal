function Sidebar() {
  return React.createElement(
    'div',
    { id: 'sidebar' },
    React.createElement('h2', null, 'Faculty Dashboard'),
    React.createElement('ul', null,
      React.createElement('li', null,
        React.createElement('a', { href: 'index.html' },
          React.createElement('i', { className: 'fas fa-home' }),
          ' Home'
        )
      ),
      React.createElement('li', null,
        React.createElement('a', { href: 'internship.html' },
          React.createElement('i', { className: 'fas fa-briefcase' }),
          ' Internships'
        )
      ),
      React.createElement('li', null,
        React.createElement('a', { href: 'student.html' },
          React.createElement('i', { className: 'fas fa-user-graduate' }),
          ' Students'
        )
      ),
      React.createElement('li', null,
        React.createElement('a', { href: '#' },
          React.createElement('i', { className: 'fas fa-chart-bar' }),
          ' Reports'
        )
      ),
      React.createElement('li', null,
        React.createElement('a', { href: '#' },
          React.createElement('i', { className: 'fas fa-cog' }),
          ' Settings'
        )
      ),
      React.createElement('li', { id: 'logout' },
        React.createElement('a', { id: 'logout-btn', href: '#' },
          React.createElement('i', { className: 'fas fa-sign-out-alt' }),
          ' Log Out'
        )
      )
    )
  );
}


window.Sidebar = Sidebar;
