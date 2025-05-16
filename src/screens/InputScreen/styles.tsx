const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
    color: '#fff',
  },
  promptLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  surprise: {
    fontSize: 14,
    color: '#aaa',
  },
  promptInput: {
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.05)',
    color: '#fff',
    padding: 16,
    height: 120,
    textAlignVertical: 'top',
  },
  charCount: {
    color: '#999',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 24,
  },
  styleList: {
    marginVertical: 12,
  },
  styleItem: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    height: 60,
    borderColor: 'transparent',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedStyleItem: {
    borderColor: '#a24bcf',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  styleLabel: {
    color: '#ccc',
    fontSize: 13,
  },
  selectedStyleLabel: {
    color: '#fff',
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 'auto',
  },
  button: {
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;