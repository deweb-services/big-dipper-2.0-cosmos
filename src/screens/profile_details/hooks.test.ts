import {
  renderHook,
  act,
  cleanup,
} from '@testing-library/react-hooks';
import { wait } from '@tests/utils';
// import nextRouter from 'next/router';
// import { useRouter } from 'next/router';
// import Router from 'next/router';
import { useProfileDetails } from './hooks';

const mockRouter = {
  query: {
    dtag: '@dtag',
  },
  replace: jest.fn(() => '/'),
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

jest.mock('@hooks', () => ({
  useDesmosProfile: (options) => {
    return ({
      fetchDesmosProfile: jest.fn(() => {
        return options.onComplete({
          profile: [
            {
              address: 'desmos18tug2x5uwkgnh7qgadezvdntpwgjc88c98zuck',
              bio: 'hungry all the time',
              dtag: 'happieSa',
              nickname: 'theHappySamoyed',
              chainLinks: [],
              applicationLinks: [],
              creationTime: '2021-10-06T00:10:45.761731',
              coverPic: 'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
              profilePic: 'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
            },
          ],
        });
      }),
      formatDesmosProfile: jest.fn(() => {
        return ({
          dtag: 'HappieSa',
          nickname: 'theHappySamoyed',
          imageUrl: 'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
          coverUrl: 'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
          bio: 'hungry all the time',
          connections: [{
            network: 'native',
            identifier: 'desmos1kmw9et4e99ascgdw0mmkt63mggjuu0xuqjx30w',
          }],
        });
      }),
    });
  },
}));

describe('hook: useProfileDetails', () => {
  it('correctly toggles profile open', async () => {
    const { result } = renderHook(() => useProfileDetails());
    console.log(result.current.state, 'wow');
    // await wait();
    // expect(Router.push).toHaveBeenCalledWith('/members');
    // test initial state
    // expect(result.current.state.loading).toBe(false);
    // expect(result.current.state.exists).toBe(true);
    // expect(result.current.state.desmosProfile.bio).toBe('hungry all the time');

    // render profile UI if shouldShowProfile returns true
    // const profileResult = renderHook(() => useDesmosProfile({
    //   address: 'desmos18tug2x5uwkgnh7qgadezvdntpwgjc88c98zuck',
    //   onComplete: (data) => {
    //     handleSetState({
    //       loading: false,
    //       exists: !!data.profile.length,
    //       desmosProfile: formatDesmosProfile(data),
    //     });
    //   },
    // })).result;
    // console.log(profileResult);

    // act(() => {
    //   console.log('2');
    //   result.current.shouldShowProfile();
    // });
    // expect(result.current.state.loading).toBe(false);
    // expect(result.current.state.exists).toBe(true);
    // expect(result.current.state.desmosProfile).toBe(true);

    // // update url if renders profile UI but dtag and input is same in case insensitive
    // act(() => {
    //   console.log('3');
    //   result.current.shouldShowProfile();
    // });
    // expect(jest.fn(() => ('/@dtag'))).toBeCalledWith('/@dtag');
    // expect(result.current.state.loading).toBe(false);
    // expect(result.current.state.exists).toBe(true);
    // expect(result.current.state.desmosProfile).toBe(true);

    // // don't render profile UI if shouldShowProfile returns false
    // act(() => {
    //   console.log('4');
    //   result.current.shouldShowProfile();
    // });
    // expect(result.current.state.loading).toBe(true);
    // expect(result.current.state.exists).toBe(false);
    // expect(result.current.state.desmosProfile).toBe(true);
  });

  // it('correctly update url', () => {
  // return to homepage if chainConfig profile is false

  // return to homepage if url dtag is not start with @

  // look up profile data in graphql if profile is true and dtag search is start with @
  // });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
