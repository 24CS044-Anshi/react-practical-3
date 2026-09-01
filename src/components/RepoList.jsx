import React from 'react';

const RepoList = ({ repos }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    {repos.map((repo) => (
      <div 
        key={repo.id} 
        style={{
          padding: '16px 20px',
          border: '1px solid #d0d7de',
          borderRadius: '6px',
          backgroundColor: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '16px', fontWeight: '600', color: '#0969da' }}>
            {repo.name}
          </span>
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noreferrer" 
            style={{ fontSize: '13px', color: '#57606a', textDecoration: 'none' }}
          >
            📂 Link: {repo.html_url}
          </a>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          backgroundColor: '#f6f8fa',
          border: '1px solid #d0d7de',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: '600',
          color: '#24292f'
        }}>
          ⭐ <span>{repo.stargazers_count}</span>
        </div>
      </div>
    ))}
  </div>
);

export default RepoList;
