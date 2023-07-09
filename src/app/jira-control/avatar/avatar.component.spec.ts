import {SMAvatarComponent} from '@trungk18/jira-control/avatar/avatar.component';

describe('SMAvatarComponent', () => {
  let component: SMAvatarComponent;
  beforeEach(() => {
    component = new SMAvatarComponent();
  });

  it('should be able to get styles', () => {
    expect(component.style.width).toEqual('12px');
    expect(component.style.height).toEqual('12px');
  });
});
