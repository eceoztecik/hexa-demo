import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  headerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    fontFamily: 'Manrope-Bold',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 22,
  },
  logoCard: {
    width: windowWidth - 48,
    height: windowWidth - 48,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  promptBox: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    marginBottom: 24,
  },
  promptHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  promptLabel: {
    color: '#aaa',
    fontSize: 12,
  },
  copyText: {
    color: '#ccc',
    fontSize: 13,
  },
  promptText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 12,
  },
  styleTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#27272a',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
  },
  styleTagText: {
    color: '#fff',
    fontSize: 13,
  },
  button: {
    backgroundColor: '#a24bcf',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;
