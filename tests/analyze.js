import test from 'ava';
import analyze from '../analyze';

test.cb('Analyzes - Patch', t => {
  const info = {
    commits: [
      { message: 'Merge pull request #60 from scottnath/feature/content-edit-delete\n\nFeature/content edit' },
      { message: ':art: adding gorgeous returns on amazing promises\n' },
      { message: ':white_check_mark: testing edit and save\n' },
      { message: ':shirt: cleanup, remove delete\n' },
      { message: ':unamused: merging with latest\n' },
      { message: 'temp fix\n' },
      { message: 'chore(package): update punchcard-semantic-release to version 2.0.1' },
    ],
  };

  return analyze({}, info, (err, type) => {
    t.is(err, null, 'No Error');
    t.is(type, 'patch', 'Patch version from given commits');
    t.end();
  });
});

test.cb('Analyzes - Minor', t => {
  const info = {
    commits: [
      { message: 'Merge pull request #60 from scottnath/feature/content-edit-delete\n\nFeature/content edit' },
      { message: ':art: adding gorgeous returns on amazing promises\n' },
      { message: ':white_check_mark: testing edit and save\n' },
      { message: ':shirt::new: cleanup, remove delete\n' },
      { message: ':unamused: merging with latest\n' },
      { message: 'temp fix\n' },
    ],
  };

  return analyze({}, info, (err, type) => {
    t.is(err, null, 'No Error');
    t.is(type, 'minor', 'Patch version from given commits');
    t.end();
  });
});

test.cb('Analyzes - Major', t => {
  const info = {
    commits: [
      { message: 'Merge pull request #60 from scottnath/feature/content-edit-delete\n\nFeature/content edit' },
      { message: ':art::boom: adding gorgeous returns on amazing promises\n' },
      { message: ':white_check_mark: testing edit and save\n' },
      { message: ':shirt::new: cleanup, remove delete\n' },
      { message: ':unamused: merging with latest\n' },
      { message: 'temp fix\n' },
    ],
  };

  return analyze({}, info, (err, type) => {
    t.is(err, null, 'No Error');
    t.is(type, 'major', 'Major version from given commits');
    t.end();
  });
});
